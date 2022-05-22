import { render, screen } from "@testing-library/react";
import Form from "./Form";

const mockData = {
  data: {
    id: 200,
    type: {
      prefix: "KE",
      id: 1,
      name: "Known Error",
    },
    number: "KE-223",
    summary: "Auto Test KI Summary",
    isPrivate: false,
    author: {
      id: 5280,
      name: "Horseman, Lennie",
    },
    service: null,
    status: {
      id: 2,
      name: "Planned",
    },
    updatedOn: "2022-04-12T08:30:36.577Z",
    createdOn: "2022-04-12T08:30:36.577Z",
    nextReviewOn: null,
  },
  name: "KnowledgeItemIndexResponse",
};

describe("Form", () => {
  test("Form should render successfully", () => {
    render(<Form Data={mockData} />);

    expect(screen).toMatchSnapshot();
  });

  test("Form should render correct fields", () => {
    render(<Form Data={mockData} />);

    expect(screen.queryByTestId("type").value).toEqual("3");
    expect(screen.queryByTestId("status").value).toEqual("2");
    expect(screen.queryByTestId("isPrivate").checked).toBe(false);
    expect(screen.queryByTestId("summary").value).toEqual(
      "Auto Test KI Summary"
    );
  });
});
