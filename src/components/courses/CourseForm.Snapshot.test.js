import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      saving={true}
      onSave={jest.fn()}
      onChange={jest.fn()}
    />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      saving={false}
      onSave={jest.fn()}
      onChange={jest.fn()}
    />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
