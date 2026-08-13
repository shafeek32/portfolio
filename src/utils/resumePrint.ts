import { resumeData } from '../data/resume';

/**
 * Generates exact ATS-friendly HTML matching the user's resume PDF.
 */
export function generateResumeHtml(): string {
  const { personalInfo, educations, projects, skills, certifications } = resumeData;

  const educationsHtml = educations
    .map(
      (edu) => `
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 9.5pt;">
        <div>
          <div style="font-weight: 700; color: #000000;">${edu.institution} <span style="font-weight: 400; color: #444;">| ${edu.location}</span></div>
          <div style="font-style: italic; color: #222;">${edu.degree}</div>
          ${edu.university ? `<div style="color: #444; font-size: 9pt;">${edu.university}</div>` : ''}
        </div>
        <div style="text-align: right; white-space: nowrap;">
          <div style="font-style: italic; color: #222;">${edu.period}</div>
          <div style="font-style: italic; color: #444; font-size: 9pt;">${edu.grade}</div>
        </div>
      </div>`
    )
    .join('');

  const projectsHtml = projects
    .map(
      (proj) => `
      <div style="margin-bottom: 11px; page-break-inside: avoid; break-inside: avoid; font-size: 9.5pt;">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <div>
            <span style="font-weight: 700; color: #000000; font-size: 10pt;">${proj.title}</span>
            ${
              proj.githubUrl
                ? ` <span style="color: #444; font-weight: 400;">|</span> <a href="${proj.githubUrl}" target="_blank" style="color: #000000; text-decoration: none; font-weight: 500; font-size: 9pt;">Github</a>`
                : ''
            }
          </div>
          <div style="font-style: italic; color: #222; font-size: 9pt; white-space: nowrap;">${proj.period}</div>
        </div>
        <div style="font-style: italic; color: #333; font-size: 9pt; margin-bottom: 2px;">${proj.role}</div>
        <ul style="margin: 0 0 3px 0; padding-left: 18px; color: #111; line-height: 1.35; font-size: 9pt;">
          ${proj.bullets.map((b) => `<li style="margin-bottom: 2px;">${b}</li>`).join('')}
        </ul>
        <div style="font-size: 9pt; color: #111;">
          <strong style="color: #000;">Technologies / Tools Used :</strong> <span style="font-style: italic;">${proj.technologies}</span>
        </div>
      </div>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shafeek_Latheef_Resume</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 15mm;
    }
    *, *::before, *::after {
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #000000;
      background: #ffffff;
      margin: 0;
      padding: 0;
      line-height: 1.35;
      font-size: 9.5pt;
      -webkit-font-smoothing: antialiased;
    }
    a {
      color: #000000;
      text-decoration: none;
    }
    .header {
      text-align: center;
      margin-bottom: 12px;
    }
    .name {
      font-size: 20pt;
      font-weight: 700;
      color: #000000;
      margin: 0 0 2px 0;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-family: Georgia, "Times New Roman", serif;
    }
    .title {
      font-size: 10pt;
      color: #222222;
      font-style: italic;
      margin: 0 0 5px 0;
    }
    .contacts {
      font-size: 9pt;
      color: #222222;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }
    .section-title {
      font-size: 10.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #000000;
      border-bottom: 1.2pt solid #000000;
      padding-bottom: 2px;
      margin-top: 10px;
      margin-bottom: 7px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 class="name">${personalInfo.name}</h1>
    <div class="title">${personalInfo.title}</div>
    <div class="contacts">
      <span>📞 ${personalInfo.phone}</span>
      <span>✉️ <a href="mailto:${personalInfo.email}">${personalInfo.email}</a></span>
      <span>💻 <a href="${personalInfo.githubUrl}">${personalInfo.githubLabel}</a></span>
      <span>💬 <a href="${personalInfo.whatsappUrl}">${personalInfo.whatsappLabel}</a></span>
      <span>📍 ${personalInfo.location}</span>
    </div>
  </div>

  <div>
    <div class="section-title">EDUCATIONS</div>
    ${educationsHtml}
  </div>

  <div>
    <div class="section-title">PROJECTS</div>
    ${projectsHtml}
  </div>

  <div style="page-break-inside: avoid; break-inside: avoid;">
    <div class="section-title">SKILLS</div>
    <div style="font-size: 9pt; line-height: 1.45; color: #111;">
      <div style="margin-bottom: 2px;"><strong style="display: inline-block; width: 190px;">Databases :</strong> ${skills.databases.join(', ')}</div>
      <div style="margin-bottom: 2px;"><strong style="display: inline-block; width: 190px;">Frameworks & Libraries :</strong> ${skills.frameworks.join(', ')}</div>
      <div style="margin-bottom: 2px;"><strong style="display: inline-block; width: 190px;">Languages :</strong> ${skills.languages.join(', ')}</div>
      <div style="margin-bottom: 2px;"><strong style="display: inline-block; width: 190px;">Programming Languages :</strong> ${skills.programmingLanguages.join(', ')}</div>
      <div style="margin-bottom: 2px;"><strong style="display: inline-block; width: 190px;">Soft Skills :</strong> ${skills.softSkills.join(', ')}</div>
      <div style="margin-bottom: 2px;"><strong style="display: inline-block; width: 190px;">Tools & Platforms :</strong> ${skills.toolsPlatforms.join(', ')}</div>
    </div>
  </div>

  <div style="page-break-inside: avoid; break-inside: avoid;">
    <div class="section-title">CERTIFICATIONS</div>
    <ul style="margin: 0; padding-left: 18px; font-size: 9pt; color: #111; line-height: 1.4;">
      ${certifications.map((c) => `<li style="margin-bottom: 2px;">${c}</li>`).join('')}
    </ul>
  </div>
</body>
</html>`;
}

/**
 * Cleanly prints or saves the exact resume document as a PDF.
 */
export function printResumeDocument(): void {
  const htmlContent = generateResumeHtml();

  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  iframe.style.visibility = 'hidden';
  iframe.setAttribute('title', 'Shafeek_Latheef_Resume');

  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (!doc) {
    window.print();
    return;
  }

  doc.open();
  doc.write(htmlContent);
  doc.close();

  setTimeout(() => {
    try {
      const originalTitle = document.title;
      document.title = 'Shafeek_Latheef_Resume';
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      document.title = originalTitle;
    } catch (e) {
      console.warn('Iframe print fallback:', e);
      window.print();
    } finally {
      setTimeout(() => {
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
      }, 2000);
    }
  }, 350);
}
