import React from "react";
import DynamicListItemFinder from "./dynamicListItemFinder";

export const DynamicList = (props) => {
  return (
    <ul>
      {props.taskArray.map((taskArrayItem) => (
        <DynamicListItemFinder
          key={taskArrayItem.id}
          id={taskArrayItem.id}
          onDelete={props.onDeleteItem}
        >
            {taskArrayItem.text}
        </DynamicListItemFinder>
      ))}
    </ul>
  );
};
