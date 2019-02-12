import React from 'react';
import { MyContext } from './context/context';

const styles = {
    clickable: { 
        cursor: "pointer",
        color: "blue" 
    },
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px"
     }
  };

export default props => {
    return (
        <MyContext.Consumer>
            {context => {
                console.log(context);
                return (
                    <div style={styles.centered}>
                        <button id="up" style={styles.clickable} onClick={() => context.increment(context.count + 1 )}>Increment</button>
                    </div>
                    );
                }}
        </MyContext.Consumer>
    );
};
