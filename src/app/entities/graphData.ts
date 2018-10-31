import { nodeData } from "./nodeData";

export class graphData {
    constructor(
        public nodes: [{
            data: [nodeData]
        }],
        public edges: [{
            data: [nodeData]
        }]
    ) { }
}