# Accessibility & Architecture Audit Worksheet

## Audit Target
- **Website audited:** [Public service site URL]
- **Audit tools used:** Lighthouse, Keyboard-only navigation
- **Date of audit:** [YYYY-MM-DD]

---

## Findings

### 1. Missing Alt Text
- **Evidence:** Lighthouse flagged 12 images without `alt` attributes.
- **Severity:** High
- **Remediation Priority:** Immediate
- **Owner:** Frontend team
- **Screenshot/Report Reference:** `screenshots/missing-alt.png`

---

### 2. Poor Color Contrast
- **Evidence:** Buttons and links fail WCAG AA contrast ratio.
- **Severity:** High
- **Remediation Priority:** Immediate
- **Owner:** Design team
- **Screenshot/Report Reference:** `screenshots/contrast-fail.png`

---

### 3. No Skip Link
- **Evidence:** Keyboard users must tab through full navigation before reaching main content.
- **Severity:** Medium
- **Remediation Priority:** High
- **Owner:** Frontend team
- **Screenshot/Report Reference:** `screenshots/no-skip-link.png`

---

### 4. Heading Hierarchy Issues
- **Evidence:** Multiple `<h3>` elements used without a preceding `<h2>`, skipped `<h1>`.
- **Severity:** Medium
- **Remediation Priority:** Moderate
- **Owner:** Frontend team
- **Screenshot/Report Reference:** `screenshots/heading-issues.png`

---

### 5. ARIA Misuse
- **Evidence