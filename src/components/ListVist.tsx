import type { Visit } from '../data/types'  

export function ListVist({ customerName }:Visit) {
    return (
      <div>
        <p>{ customerName }</p>
         
      </div>
    );
  }
  