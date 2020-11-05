import React from 'react';
import { Spinner } from 'reactstrap'


const Loading = () => {
    return (
        <div>
            <Spinner type='grow'
             
             style={{ width: '180px', height: '180px' }}
              />
        </div>
      );
}
 
export default Loading;