import React from "react";
import formOptions from "../../db/form.json";
import "./Form.css";

const Form = ({ Data }) => {
  const selectOption = formOptions.forms[0].fieldsets[0].fields[0]["x-options"];
  const statusOption = formOptions.forms[0].fieldsets[0].fields[1]["x-options"];

  const checkBoxOption = formOptions.forms[0].fieldsets[0].fields[2];
  const inputOption = formOptions.forms[0].fieldsets[0].fields[3];

  // console.log(selectOption);
  // console.log(Data.data.type.name);

  return (
    <>
      <div className="container">
        <form className="survey-form">
          {/* <div className="form-input">
            <label id="name-label">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="form-input-size"
              required
            />
          </div> */}
          <div className="form-input">
            <label>Knowledge Item Type</label>
            <select
              className="form-input-size"
              data-testid="type"
              value={
                selectOption.find((opt) => opt.text === Data.data.type.name)
                  ?.value
              }
            >
              {selectOption.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>

          <div className="form-input">
            <label>Lifecycle Status?</label>
            <select
              className="form-input-size"
              data-testid="status"
              value={
                statusOption.find((opt) => opt.text === Data.data.status.name)
                  ?.value
              }
            >
              {statusOption.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>

          <div className="form-input">
            <label>
              <input
                type="checkbox"
                data-testid="isPrivate"
                className="check-box"
                checked={Data.data.isPrivate}
              />
              {checkBoxOption.displayName}
            </label>
          </div>

          <div className="form-input">
            <label>{inputOption.displayName}</label>
            <input
              type="text"
              data-testid="summary"
              value={Data.data.summary}
              className="form-input-size"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
