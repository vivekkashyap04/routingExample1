import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-mathes',
  templateUrl: './mathes.component.html',
  styleUrls: ['./mathes.component.css']
})
export class MathesComponent implements OnInit {
    matches={};
  constructor(private matchservice:MapService) { }

  ngOnInit() {
    this.matchservice.getMatches().subscribe(data=>this.matches=data)
  }

}
