import React from "react";
import { Checkbox, Button, Header, Icon } from "semantic-ui-react";

const Menu = ({ name, id, deleteMenu }) => {
  return (
    <div style={styles.flex}>
      <div style={styles.flex}>
        {/* <Checkbox defaultChecked={complete} onClick={() => updateMenu(id)} />
        <div style={complete ? styles.complete : {}} className="center">
          <Header as="h2" style={{ marginLeft: "15px" }}> */}
          <div>
            {name}
        </div>
      </div>
      <Button
        icon
        color="red"
        size="meium"
        onClick={() => deleteMenu(id)}
        style={{ marginLeft: "15px" }}
      >
        <Icon name="trash" />
      </Button>
    </div>
  );
};
const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default Menu;