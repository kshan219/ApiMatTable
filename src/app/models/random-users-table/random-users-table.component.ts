import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RandomApiService } from '../services/random-api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, tap } from 'rxjs';
import { Result, UserData } from '../userdata-interface';

@Component({
  selector: 'app-random-users-table',
  templateUrl: './random-users-table.component.html',
  styleUrls: ['./random-users-table.component.scss']
})
export class RandomUsersTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  dataSource = new MatTableDataSource<Result>([])

  currentPage = 0;
  sizeOfPages = 5;

  constructor(protected randomApiService: RandomApiService) { }

  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'gender', 'age'];

  ngOnInit(): void {
    this.getData(this.currentPage, this.sizeOfPages);
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(
      tap(() => this.pageEventChange())
    ).subscribe();
  }

  getData(currentPage: number, sizeOfPages: number) {
    this.randomApiService.getUsers(currentPage, sizeOfPages).pipe(map((data: UserData) => data.results))
      .subscribe((users) => {
        console.log(users);
        this.dataSource.data = users;
      });
  }

  pageEventChange(): void {
    this.getData(this.paginator.pageIndex + 1, this.paginator.pageSize);
  }

}
