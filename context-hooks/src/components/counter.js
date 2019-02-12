import React from 'react';
import { MyContext } from './context/context';

const styles = {
    clickable: { cursor: "pointer" },
    h1: {
      color: "red",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "50px"
    },
    h5: {
        fontSize: "50px",
        color: "purple"
    },
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
     }
  };

export default props => {
    return (
        <MyContext.Consumer>
            {context => {
                return (
                    <React.Fragment>
                    <h1 style={styles.h1}>{context.title}</h1>
                    <div style={styles.centered}>
                        <h5 style={styles.h5}>{context.count}</h5>
                    </div>
                    </React.Fragment>
                );
            }}
        </MyContext.Consumer>
    );
};