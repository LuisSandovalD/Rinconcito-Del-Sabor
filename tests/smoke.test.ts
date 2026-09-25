import { describe, expect, it } from "vitest";
import { PERMISSIONS } from "@/lib/permissions";

describe("project foundation", () => {
  it("keeps permission codes unique", () => {
    expect(new Set(PERMISSIONS).size).toBe(PERMISSIONS.length);
  });

  it("includes critical permissions", () => {
    expect(PERMISSIONS).toContain("orders.create");
    expect(PERMISSIONS).toContain("cash.close");
    expect(PERMISSIONS).toContain("audit.view");
  });
});
