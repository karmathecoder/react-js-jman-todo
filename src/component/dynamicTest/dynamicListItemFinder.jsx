import React from "react";

const DynamicListItemFinder = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" >
        {/* wrapper creation using prop.children */}
      <div>{props.children}</div>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default DynamicListItemFinder;
