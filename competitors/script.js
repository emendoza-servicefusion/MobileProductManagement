const competitors = ["Housecall Pro", "Jobber", "Field Pulse", "Service Titan", "Workiz", "CompanyCam"];
const screens = [
  "Mobile",
  "Home",
  "Schedule/Dispatch",
  "Jobs",
  "Estimates/Quotes",
  "Invoicing/Payments",
  "Customer Management",
  "Fleet Tracking/Maps",
  "Inventory",
  "Reporting"
];

// Add screenshots here later. Each cell may contain one or more image paths.
// Example: "Housecall Pro|Home": ["images/housecallpro/housecall-home-1.png", "images/housecallpro/housecall-home-2.png"]
const screenshots = {
  "Housecall Pro|Home": ["images/housecallpro/HousecallPro_Home_01.png"],
  "Housecall Pro|Schedule/Dispatch": [
    "images/housecallpro/schedule0.png",
    "images/housecallpro/schedule1.png",
    "images/housecallpro/scheduleWeek.png",
    "images/housecallpro/scheduleWeekByEmployee.png",
    "images/housecallpro/schedulingUnscheduledJobs.png",
    "images/housecallpro/schedulingUnscheduledJobs2.png",
    "images/housecallpro/Dispatch.png"
  ],
  "Housecall Pro|Jobs": [
    "images/housecallpro/Job.png",
    "images/housecallpro/Job2.png",
    "images/housecallpro/JobInput.png",
    "images/housecallpro/JobNew.png"
  ],
  "Housecall Pro|Estimates/Quotes": [
    "images/housecallpro/estimateCreate.png",
    "images/housecallpro/estimatePresent.png"
  ],
  "Housecall Pro|Invoicing/Payments": [
    "images/housecallpro/invoice.png",
    "images/housecallpro/invoicesSummary.png"
  ],
  "Housecall Pro|Mobile": [
    "images/housecallpro/mobile/mobileHome.png",
    "images/housecallpro/mobile/Mobile1.png",
    "images/housecallpro/mobile/MobileSchedule.png",
    "images/housecallpro/mobile/MobileScheduleList.png",
    "images/housecallpro/mobile/MobileScheduling.png",
    "images/housecallpro/mobile/MobileMyJobs.png",
    "images/housecallpro/mobile/MobileJob.png",
    "images/housecallpro/mobile/MobileJobAttach.png",
    "images/housecallpro/mobile/MobileJobCreate.png",
    "images/housecallpro/mobile/MobileCustomers.png",
    "images/housecallpro/mobile/customerProfile.png",
    "images/housecallpro/mobile/MobileInventory.png",
    "images/housecallpro/mobile/MobileScanPropertyAssets.png",
    "images/housecallpro/mobile/MobilePackages.png",
    "images/housecallpro/mobile/MobilePackageTemplates.png",
    "images/housecallpro/mobile/MobilePackagePayment.png",
    "images/housecallpro/mobile/MobileInvoice.png",
    "images/housecallpro/mobile/MobileCheckout.png"
  ],
  "Housecall Pro|Customer Management": ["images/housecallpro/Customer(1).png"],
  "Housecall Pro|Inventory": [
    "images/housecallpro/inventory1.png",
    "images/housecallpro/inventory2.png",
    "images/housecallpro/inventory3.png"
  ],
  "Housecall Pro|Fleet Tracking/Maps": [
    "images/housecallpro/Map1.png",
    "images/housecallpro/Map2.png",
    "images/housecallpro/Map3JobDetails.png",
    "images/housecallpro/mapRouting.png"
  ],
  "Housecall Pro|Reporting": [
    "images/housecallpro/Reporting1.png",
    "images/housecallpro/Reporting2.png",
    "images/housecallpro/Reporting3.png",
    "images/housecallpro/ReportingEmployeeSummary.png",
    "images/housecallpro/ReportingOld.png"
  ],
  "Jobber|Home": [
    "images/jobber/Home.png",
    "images/jobber/Home2.png"
  ],
  "Jobber|Schedule/Dispatch": [
    "images/jobber/scheduling.png",
    "images/jobber/Dispatch(1).png"
  ],
  "Jobber|Jobs": [
    "images/jobber/jobs.png",
    "images/jobber/job(1).png"
  ],
  "Jobber|Estimates/Quotes": [
    "images/jobber/Estimates.png",
    "images/jobber/Estimates2.png"
  ],
  "Jobber|Invoicing/Payments": [
    "images/jobber/invoice1.png",
    "images/jobber/invoice2.png"
  ],
  "Jobber|Mobile": [
    "images/jobber/mobile/Screenshot_20260925-162608.png",
    "images/jobber/mobile/Screenshot_20260925-162922.png",
    "images/jobber/mobile/Screenshot_20260925-162952.png",
    "images/jobber/mobile/Screenshot_20260925-162908.png",
    "images/jobber/mobile/Screenshot_20260925-162943.png",
    "images/jobber/mobile/Screenshot_20260925-162547.png",
    "images/jobber/mobile/Screenshot_20260925-163047.png",
    "images/jobber/mobile/Screenshot_20260925-162537.png"
  ],
  "Jobber|Customer Management": [
    "images/jobber/Customers.png",
    "images/jobber/Customers2.png",
    "images/jobber/customerProfile.png"
  ],
  "Jobber|Fleet Tracking/Maps": ["images/jobber/scheduleAndMap.png"],
  "Jobber|Reporting": [
    "images/jobber/Reporting.png",
    "images/jobber/Reporting2(1).png"
  ],
  "Field Pulse|Home": ["images/fieldpulse/Home.png"],
  "Field Pulse|Schedule/Dispatch": [
    "images/fieldpulse/ScheduleSuggestTimes.png",
    "images/fieldpulse/DispatchBoard.png",
    "images/fieldpulse/DispatchBoardOld.png"
  ],
  "Field Pulse|Jobs": [
    "images/fieldpulse/JobsList.png",
    "images/fieldpulse/JobRecord.png"
  ],
  "Field Pulse|Estimates/Quotes": ["images/fieldpulse/EstimateRecord.png"],
  "Field Pulse|Invoicing/Payments": [
    "images/fieldpulse/InvoiceRecord.png",
    "images/fieldpulse/TakePayment.png"
  ],
  "Field Pulse|Customer Management": [
    "images/fieldpulse/CustomersList.png",
    "images/fieldpulse/CustomerRecord.png"
  ],
  "Field Pulse|Fleet Tracking/Maps": [
    "images/fieldpulse/TeamScheduleMap.png",
    "images/fieldpulse/RouteMap.png"
  ],
  "Field Pulse|Mobile": [
    "images/fieldpulse/mobile/MobileDashboard.png",
    "images/fieldpulse/mobile/MobileScheduleList.png",
    "images/fieldpulse/mobile/MobileDispatch.png",
    "images/fieldpulse/mobile/MobileWorkOrder.png",
    "images/fieldpulse/mobile/MobileMap.png"
  ],
  "Field Pulse|Inventory":["images/fieldpulse/Inventory.png"],
  "Field Pulse|Reporting": [
    "images/fieldpulse/ReportingDashboard.png",
    "images/fieldpulse/ReportingDashboardEditor.png"
  ],
  "Workiz|Home": ["images/workiz/Home.png"],
  "Workiz|Schedule/Dispatch": [
    "images/workiz/schedule1.png",
    "images/workiz/schedule2.png",
    "images/workiz/schedule3.png",
    "images/workiz/schedule4.png"
  ],
  "Workiz|Jobs": [
    "images/workiz/jobs.png",
    "images/workiz/Job.png"
  ],
  "Workiz|Estimates/Quotes": ["images/workiz/estimates.png"],
  "Workiz|Invoicing/Payments": [
    "images/workiz/invoice1.png",
    "images/workiz/invoice2.png",
    "images/workiz/Payments.png"
  ],
  "Workiz|Customer Management": ["images/workiz/Customers2.png"],
  "Workiz|Fleet Tracking/Maps": ["images/workiz/Map.png"],
  "Workiz|Inventory": ["images/workiz/Inventory.png"],
  "Workiz|Reporting": [
    "images/workiz/Reports.png",
    "images/workiz/reportExample.png"
  ],
  "Workiz|Mobile": [
    "images/workiz/mobile/1000016261.png",
    "images/workiz/mobile/1000016265.png",
    "images/workiz/mobile/1000016264.png",
    "images/workiz/mobile/1000016262.png",
    "images/workiz/mobile/1000016266.png",
    "images/workiz/mobile/1000016267.png",
    "images/workiz/mobile/1000016270.png",
    "images/workiz/mobile/1000016275.png",
    "images/workiz/mobile/1000016274.png",
    "images/workiz/mobile/1000016272.png",
    "images/workiz/mobile/1000016273.png",
    "images/workiz/mobile/1000016269.png",
    "images/workiz/mobile/1000016268.png"
  ],
  "CompanyCam|Home": ["images/CompanyCam/desktop.png"],
  "CompanyCam|Jobs": [
    "images/CompanyCam/Jobs.png",
    "images/CompanyCam/JobDetails.png"
  ],
  "CompanyCam|Invoicing/Payments": [
    "images/CompanyCam/invoice.png",
    "images/CompanyCam/invoice2.png"
  ],
  "CompanyCam|Mobile": [
    "images/CompanyCam/Mobile/onboarding.png",
    "images/CompanyCam/Mobile/home.png",
    "images/CompanyCam/Mobile/projectsList.png",
    "images/CompanyCam/Mobile/projectDetails.png",
    "images/CompanyCam/Mobile/map.png",
    "images/CompanyCam/Mobile/myChecklist.png",
    "images/CompanyCam/Mobile/walkthroughPrompt.png",
    "images/CompanyCam/Mobile/walkthroughAIsummary.png",
    "images/CompanyCam/Mobile/notifications.png"
  ],
  "CompanyCam|Customer Management": [
    "images/CompanyCam/customers.png",
    "images/CompanyCam/customerDetails.png"
  ],
  "CompanyCam|Fleet Tracking/Maps": ["images/CompanyCam/map.png"],
  "CompanyCam|Inventory": ["images/CompanyCam/Inventory.png"],
  "CompanyCam|Reporting": ["images/CompanyCam/reporting.png"]
};

function renderSnapshot() {
  const container = document.querySelector("#snapshot");
  competitors.forEach((name) => {
    const info = competitorInfo[name];
    if (!info) return;
    const card = document.createElement("article");
    card.className = "snapshot-card";

    const title = document.createElement("h3");
    title.textContent = name;

    const take = document.createElement("p");
    take.className = "snapshot-take";
    take.textContent = info.position.take;

    const why = document.createElement("details");
    why.className = "snapshot-details";
    const whySummary = document.createElement("summary");
    whySummary.textContent = "Why we think this";
    const whyList = document.createElement("ul");
    info.position.why.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      whyList.append(li);
    });
    why.append(whySummary, whyList);

    const words = document.createElement("details");
    words.className = "snapshot-details";
    const wordsSummary = document.createElement("summary");
    wordsSummary.textContent = "In their words";
    const headline = document.createElement("p");
    headline.className = "snapshot-headline";
    headline.textContent = `“${info.headline}”`;
    const sub = document.createElement("p");
    sub.className = "snapshot-sub";
    sub.textContent = info.subheadline;
    const themes = document.createElement("ul");
    themes.className = "snapshot-themes";
    info.themes.forEach((theme) => {
      const li = document.createElement("li");
      li.textContent = theme;
      themes.append(li);
    });
    const proof = document.createElement("p");
    proof.className = "snapshot-proof";
    proof.textContent = info.proof;
    words.append(wordsSummary, headline, sub, themes);

    const pricing = document.createElement("div");
    pricing.className = "snapshot-pricing";
    const from = document.createElement("p");
    from.className = "snapshot-from";
    // Only a real price gets the "From" prefix; "Contact sales" etc. stand alone.
    from.innerHTML = /\d/.test(info.pricing.from) ? `<span>From</span> <strong></strong>` : `<strong></strong>`;
    from.querySelector("strong").textContent = info.pricing.from;
    pricing.append(from);

    const footer = document.createElement("p");
    footer.className = "snapshot-footer";
    footer.append(`Captured ${info.captured} · `);
    info.sources.forEach(([label, href], i) => {
      if (i) footer.append(" · ");
      const a = document.createElement("a");
      a.href = href;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = label;
      footer.append(a);
    });

    const head = document.createElement("div");
    head.className = "snapshot-head";
    head.append(title, pricing);

    const winLoss = document.createElement("div");
    winLoss.className = "snapshot-winloss";
    winLoss.innerHTML = '<span class="placeholder-tag">Placeholder</span><strong></strong><p></p>';
    winLoss.querySelector("strong").textContent = "Win/loss data";
    winLoss.querySelector("p").textContent = "Data not collected yet.";

    card.append(head, take, proof, winLoss, why, words, footer);
    container.append(card);
  });
}
renderSnapshot();

const gallery = document.querySelector("#gallery");
const viewer = document.querySelector("#viewer");
const viewerCompetitor = document.querySelector("#viewer-competitor");
const viewerTitle = document.querySelector("#viewer-title");
const viewerCount = document.querySelector("#viewer-count");
const viewerContent = document.querySelector("#viewer-content");

function addCell(className, content) {
  const cell = document.createElement("div");
  cell.className = `grid-cell ${className}`;
  if (typeof content === "string") cell.textContent = content;
  else cell.append(content);
  gallery.append(cell);
}

addCell("header-cell corner", "Key screen");
const competitorNotes = {
  CompanyCam: "CompanyCam is not a direct competitor. Included as an example of Mobile functionality for technicians in the field."
};

competitors.forEach((competitor) => {
  const note = competitorNotes[competitor];
  if (!note) return addCell("header-cell", competitor);
  const label = document.createElement("span");
  label.className = "header-label";
  const info = document.createElement("span");
  info.className = "info-icon";
  info.tabIndex = 0;
  info.textContent = "i";
  info.setAttribute("role", "note");
  info.setAttribute("aria-label", note);
  info.dataset.tip = note;
  label.append(competitor, info);
  addCell("header-cell", label);
});

screens.forEach((screen) => {
  addCell("row-label", screen.replace("/", " &\n"));
  competitors.forEach((competitor) => {
    const button = document.createElement("button");
    button.className = "screen-button";
    button.type = "button";
    button.setAttribute("aria-label", `Open ${competitor} ${screen} screenshots`);
    const images = screenshots[`${competitor}|${screen}`] || [];
    if (images.length) {
      const thumbnail = document.createElement("img");
      thumbnail.className = "screen-thumbnail";
      thumbnail.src = images[0];
      thumbnail.alt = "";
      button.classList.add("has-shot");
      button.append(thumbnail);
      if (images.length > 1) {
        const count = document.createElement("span");
        count.className = "shot-count";
        count.textContent = `${images.length} screens`;
        button.append(count);
      }
    } else {
      button.innerHTML = '<span class="placeholder-text">Not captured yet</span>';
    }
    button.addEventListener("click", () => openViewer(competitor, screen));
    addCell("screen-cell", button);
  });
});

function openViewer(competitor, screen) {
  const images = screenshots[`${competitor}|${screen}`] || [];
  viewerCompetitor.textContent = competitor;
  viewerTitle.textContent = screen;
  viewerCount.textContent = images.length ? `${images.length} screenshot${images.length === 1 ? "" : "s"}` : "Screenshots not added yet";
  viewerContent.replaceChildren();
  viewerContent.classList.toggle("has-images", images.length > 0);

  if (!images.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = "<strong>This overlay is ready.</strong>Add one or more screenshots for this cell and they will appear here.";
    viewerContent.append(empty);
  } else {
    images.forEach((src) => {
      const img = document.createElement("img");
      img.className = screen === "Mobile" ? "viewer-image viewer-image-mobile" : "viewer-image";
      img.src = src;
      img.alt = `${competitor} — ${screen}`;
      if (competitor === "CompanyCam" && screen === "Mobile") {
        const figure = document.createElement("figure");
        figure.className = "viewer-figure";
        const caption = document.createElement("figcaption");
        caption.textContent = src.split("/").pop();
        figure.append(img, caption);
        viewerContent.append(figure);
      } else {
        viewerContent.append(img);
      }
    });
  }
  viewer.showModal();
}

document.querySelector(".close-button").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) viewer.close();
});

// Column count follows the competitor list; the last column drops its right border.
gallery.style.setProperty("--competitors", competitors.length);
[...gallery.children].forEach((cell, i) => {
  if (i % (competitors.length + 1) === competitors.length) cell.classList.add("last-col");
});
