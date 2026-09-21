// Purpose: Compile-time exercise of the public rendering API.
import{renderCardSVG,validateVerdict}from'@gbesse/jev-cardgen';const v=validateVerdict({schemaVersion:1,title:'x',headline:{label:'x',value:1},bars:[],footer:{model:'x',generatedAt:'x'}});renderCardSVG(v,'dark');
