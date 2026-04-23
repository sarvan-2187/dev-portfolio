## Case Study: Tantrotsav 4th Edition - Managing 3,500+ Registrations


## The Reality

"It's just a college fest website."

That's what most people think when they hear about a tech fest registration platform. Until they see 3,500+ registrations flowing through in real-time, 60+ events running in parallel, live payments being processed, database updates happening simultaneously, and everything running without a single failure.  

I had the privilege of being part of the Website Team for Tantrotsav 4th Edition - the National Level Tech Fest of Amrita Vishwa Vidyapeetham, Chennai Campus.

And this was far more than "just a website."

---

## What We Built

We created a production platform that handled 3,500+ registrations across 10 Indian states, 60+ events running simultaneously, live payment processing with secure transaction handling, real-time database operations during peak registration windows, zero downtime throughout the event, and remote server deployments with proper configuration management.

What made this real was that actual users depended on it. Real money flowed through the payment gateway. Real registrations had to be accurate. There was no "try again tomorrow" - everything had to work when it mattered.

---
![Octo Logo](https://ik.imagekit.io/sarvan/Portfolio/tantrotsasv.png)


## What I Did

**Managed Live Production Deployments**

I handled deployments on remote servers, managing secure file transfers to ensure code integrity, build updates without interrupting users, environment configuration management, and zero-downtime releases. The platform stayed live while updates were pushed. This meant being thoughtful about how changes were rolled out. One mistake could affect thousands of users instantly. There was no safety net.

**Handled Live Database Operations**

I managed real-time database operations with user registration updates as they came in, real-time data corrections when needed, ensuring data consistency across thousands of concurrent registrations, and verifying that no registration data was lost or corrupted. Managing a live database taught me that data integrity isn't something you can "fix later." Every operation had to be deliberate and traceable.

**Resolved 15+ Payment Discrepancies**

This was perhaps the most critical responsibility. Payment issues need immediate resolution. I coordinated directly with the payment gateway provider to investigate failures, validated backend transaction records against gateway logs, identified whether a payment truly failed or just appeared to fail due to a timeout, and worked with users to ensure their issues were resolved. A user's payment might appear to fail, but money was actually deducted. I traced it back, verified it in our records, and ensured refunds or sored the issue. Sometimes a timeout occurred during payment confirmation, creating a mismatch between our database and the payment gateway. Transaction records didn't always match between systems, requiring careful investigation and reconciliation. Every single discrepancy was documented and resolved.

**Modified the Platform Using React.js and Tailwind CSS**

I worked on the frontend, updating and maintaining the user interface for the registration flow, responsive design for different devices, modern UI standards and best practices, and components and pages as needed during the event.

**Integrated ImageKit CDN**

I set up ImageKit for optimized asset delivery with posters, flyers, and media files served through the CDN. Fast load times came even for users across different regions, automatic optimization of images without manual compression, and reduced load on our servers.

---

## Why This Mattered

Production systems don't forgive mistakes. There's no "try again" when real money and real users are involved.

During the event, registrations came in constantly. Payments needed immediate confirmation. If our database went down, 1,000+ people waiting in the registration queue would be stuck. If a payment discrepancy wasn't resolved quickly, a user might think their registration failed.

Every decision I made had to account for these real consequences. This experience sharpened my understanding of reliability — the system had to work, consistently. It taught me accountability - I was responsible for real user outcomes. And it demanded execution under pressure - issues needed solutions, not excuses.

---

## The Team

This wasn't something I did alone. It was a team effort. Dr. Suthir Sriram, as the Organizing Chair, provided direction and vision. Prof. Jayakumar Vijayarangan, our Principal, trusted us with this responsibility. Vishnu Saketh Panguluri, Sanjit Rao, M K Eniyan, and Dhivijit Koppuravuri brought technical excellence. M Kathin, Sasi Visvan C, and Arvind Sivakumar provided support and instrumental contributions.

Working with this team expanded my skill set significantly. The pressure, the problem-solving, the collaboration — all of it shaped how I approach engineering.

---

## Key Takeaway

"Just a college fest website" was actually a production-grade system. The domain doesn't change what matters. What mattered was real users, real money, real consequences, and zero tolerance for failure. That's production. That's what separates "works" from "production-ready."

---

## The Platform

Live at: [https://tantrotsav.amrita.edu](https://tantrotsav.amrita.edu)

---

## Grateful For

Grateful for the opportunity to work on something real. Grateful for the pressure that forced me to think carefully about reliability. Grateful for the growth that came from executing under constraints.

Because sometimes, a college fest website is just that - and sometimes, it's a real lesson in what it takes to build systems that people depend on.

**Project Duration:** December 2025 - March 2026  
**Tech Stack:** MERN (React, Node.js, Express, MongoDB) + ImageKit CDN  
**Users Supported:** 3,500+ | **States Covered:** 10 | **Events Managed:** 60+