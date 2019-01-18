import { Component, OnInit } from '@angular/core';
import {Place} from '../shared/models/place';

@Component({
  selector: 'app-route-proposal',
  templateUrl: './route-proposal.component.html',
  styleUrls: ['./route-proposal.component.scss']
})
export class RouteProposalComponent implements OnInit {

  places: Place[] = [];
  constructor() { }

  ngOnInit() {
  }

}
