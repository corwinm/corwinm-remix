import { existsSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const componentSource = readFileSync(
  new URL("./profile-image.tsx", import.meta.url),
  "utf8",
);
const profileSource = readFileSync(
  new URL("../content/profile.ts", import.meta.url),
  "utf8",
);
const optimizedImagePath = fileURLToPath(
  new URL("../../public/profile-2025-448.jpg", import.meta.url),
);

describe("profile image delivery", () => {
  it("uses a display-sized image for the homepage profile photo", () => {
    expect(componentSource).toContain("src={publicProfile.displayImagePath}");
    expect(componentSource).toContain("width={224}");
    expect(componentSource).toContain("height={224}");
    expect(componentSource).toContain('fetchPriority="high"');
    expect(componentSource).not.toContain("src={publicProfile.imagePath}");
  });

  it("keeps both image paths in the shared public profile", () => {
    expect(profileSource).toContain('imagePath: "/profile-2025.jpg"');
    expect(profileSource).toContain(
      'displayImagePath: "/profile-2025-448.jpg"',
    );
  });

  it("keeps the display image below a 100 KB transfer budget", () => {
    expect(existsSync(optimizedImagePath)).toBe(true);
    expect(statSync(optimizedImagePath).size).toBeLessThan(100_000);
  });
});
