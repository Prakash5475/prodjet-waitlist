import { useState } from "react";

import {
  commonFields,
  dynamicFields,
} from "../data/fieldConfig";

function FormPage({
  userType,
  onSuccess,
}) {
  const fields = [
    ...commonFields,
    ...dynamicFields[userType],
  ];

  const [formData, setFormData] =
    useState({});

  const [errors, setErrors] =
    useState({});

  const handleChange = (
    name,
    value
  ) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    fields.forEach((field) => {
      if (
        !formData[field.name]?.trim()
      ) {
        newErrors[field.name] =
          `${field.label} is required`;
      }
    });

    setErrors(newErrors);

    if (
      Object.keys(newErrors).length ===
      0
    ) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {userType} Details
      </h2>

      <div className="form-container">
        {fields.map((field) => (
          <div
            key={field.name}
            className="form-group"
          >
            <label>
              {field.label}
            </label>

            <input
              type="text"
              placeholder={field.label}
              value={
                formData[field.name] || ""
              }
              onChange={(e) =>
                handleChange(
                  field.name,
                  e.target.value
                )
              }
            />

            {errors[field.name] && (
              <small className="error">
                {
                  errors[field.name]
                }
              </small>
            )}
          </div>
        ))}

        <button
          className="continue-btn"
          type="submit"
        >
          Join Waitlist
        </button>
      </div>
    </form>
  );
}

export default FormPage;