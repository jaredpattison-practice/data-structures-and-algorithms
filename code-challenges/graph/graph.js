'use strict'; 
const Node = require('./node.js');

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addNode(node) {
    this._adjacencyList.set(node,[]);
  }

  addEdge(startNode, endNode, weight = 0) {
    if(!this._adjacencyList.has(startNode) || !this._adjacencyList.has(endNode)) throw new Error('invalid nodes');

    let adjacencies = this._adjacencyList.get(startNode);

    adjacencies.push({
      node:endNode,
      weight,
    });
  }

  getNeighbors(node) {
    if(!this._adjacencyList.has(node))throw new Error('invalid node');
    return [...this._adjacencyList.get(node)];
  }
}
let graph = new Graph();
let nodeA = new Node(2);
let nodeB = new Node(4);

graph.addNode(nodeA);
graph.addNode(nodeB);
graph.addEdge(nodeA, nodeB);

let neighborsOfA = graph.getNeighbors(nodeA);

console.log(neighborsOfA);
console.log(neighborsOfA.length);
console.log(neighborsOfA[0].node);
console.log(neighborsOfA[0].weight);


module.exports = Graph;