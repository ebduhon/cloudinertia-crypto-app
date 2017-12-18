import { Component } from '@angular/core';
import D3_CONFIG from './d3.config';
import { Node, Link } from './d3';

@Component({
  selector: 'd3-demo-1',
  templateUrl: './d3-demo-1.component.html',
  styleUrls: ['./d3-demo-1.component.scss']
})
export class D3Demo1Component {
  
  nodes: Node[] = [];
  links: Link[] = [];
  
  constructor() {
    
    const N = D3_CONFIG.N,
          getIndex = number => number - 1;
    
    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }
    
    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;
        
        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }

}
