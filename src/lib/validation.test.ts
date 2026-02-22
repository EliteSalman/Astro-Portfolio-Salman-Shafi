import { describe, expect, test } from "bun:test";
import {
  validateContactForm,
  MAX_NAME_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_SUBJECT_LENGTH,
  MAX_MESSAGE_LENGTH,
} from "./validation";

describe("validateContactForm", () => {
  const validData = {
    name: "John Doe",
    email: "john@example.com",
    subject: "Hello",
    message: "This is a test message.",
  };

  test("should return null for valid input", () => {
    const result = validateContactForm(validData);
    expect(result).toBeNull();
  });

  test("should return error if name is missing", () => {
    const result = validateContactForm({ ...validData, name: "" });
    expect(result).toBe("All fields are required");
  });

  test("should return error if email is missing", () => {
    const result = validateContactForm({ ...validData, email: "" });
    expect(result).toBe("All fields are required");
  });

  test("should return error if subject is missing", () => {
    const result = validateContactForm({ ...validData, subject: "" });
    expect(result).toBe("All fields are required");
  });

  test("should return error if message is missing", () => {
    const result = validateContactForm({ ...validData, message: "" });
    expect(result).toBe("All fields are required");
  });

  test("should return error if email format is invalid", () => {
    const result = validateContactForm({ ...validData, email: "invalid-email" });
    expect(result).toBe("Invalid email format");
  });

  test("should return error if name is too long", () => {
    const longName = "a".repeat(MAX_NAME_LENGTH + 1);
    const result = validateContactForm({ ...validData, name: longName });
    expect(result).toBe(`Name cannot exceed ${MAX_NAME_LENGTH} characters`);
  });

  test("should return error if email is too long", () => {
    const longEmail = "a".repeat(MAX_EMAIL_LENGTH - 10) + "@example.com"; // Ensure total length > MAX
    // Wait, construct exact length exceeding
    const prefix = "a".repeat(MAX_EMAIL_LENGTH + 1 - "@example.com".length);
    const result = validateContactForm({ ...validData, email: prefix + "@example.com" });
    expect(result).toBe(`Email cannot exceed ${MAX_EMAIL_LENGTH} characters`);
  });

  test("should return error if subject is too long", () => {
    const longSubject = "a".repeat(MAX_SUBJECT_LENGTH + 1);
    const result = validateContactForm({ ...validData, subject: longSubject });
    expect(result).toBe(`Subject cannot exceed ${MAX_SUBJECT_LENGTH} characters`);
  });

  test("should return error if message is too long", () => {
    const longMessage = "a".repeat(MAX_MESSAGE_LENGTH + 1);
    const result = validateContactForm({ ...validData, message: longMessage });
    expect(result).toBe(`Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`);
  });
});
