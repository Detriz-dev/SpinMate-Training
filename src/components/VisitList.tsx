import { Visit } from './data/types.ts'  

export function VisitList({ customerName }:Visit) {
    return (
      <div>
        <p>{ customerName }</p>
         
      </div>
    );
  }