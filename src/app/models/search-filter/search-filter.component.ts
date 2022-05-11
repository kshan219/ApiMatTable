import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Result } from '../userdata-interface';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  @Input() dataSource = new MatTableDataSource<Result>();
  @Output() getDataEmit = new EventEmitter<Result[]>();

  value = '';

  constructor() { }

  ngOnInit(): void {

  }

  applyFilter() {
    const filterValue = this.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.getDataEmit.emit(this.dataSource.filteredData);
  }
}
