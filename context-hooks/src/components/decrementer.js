import React from 'react';
import { MyContext } from './context/context';

const styles = {
    clickable: { 
        cursor: "pointer",
        color: "red" 
    },
    centered: {
       display: "flex",
       justifyContent: "center",
       alignItems: "center"
    }
  };

export default props => {
    return (
        <MyContext.Consumer>
            {context => {
                return (
                    <div style={styles.centered}>
                    <button id="down" style={styles.clickable} onClick={context.decrement}>Decrement</button>
                    </div>
                );
            }}
        </MyContext.Consumer>
    );
};