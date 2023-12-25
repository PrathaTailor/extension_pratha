import { Builder } from '@builder.io/react'
import Faq from './Faq'

Builder.registerComponent(Faq, {
  name: 'co15 Faq',
  inputs: [
    {
      type: 'string',
      name: 'title',
      defaultValue: 'FAQ',
    },
    {
      type: 'list',
      name: 'faqList',
      defaultValue: [
        {
          question:
            'If I file for an extension, am I still required to pay my tax now?',
          answer:
            '<p>Yes, an extension of time to file your return does not grant you any extension of time to pay your tax liability. To find the best way to make a payment for you, visit <a href="https://www.irs.gov/payments" target="_blank" rel="noreferrer">https://www.irs.gov/payments</a></p>',
        },
        {
          question: `What does it mean that you're an Authorized IRS e- file Provider?`,
          answer:
            '<p>Tax professionals accepted by the IRS into its electronic filing program are called &quit;Authorized IRS e-File Providers.&quit; Each year, we are required to complete testing with the IRS to ensure that our software is operating properly and securely.</p>',
        },
        {
          question: `Do I need to file an extension if I'm expecting a refund?`,
          answer:
            '<p>The IRS and most states require that you file either your tax return or for a tax extension regardless of whether you owe taxes or not. However, there are no additional fees, penalties, or interest charges due on a refund tax return filed after the April 18th personal deadline.</p>',
        },
        {
          question:
            'How do you keep me informed as the status of my extension?',
          answer: `<p>We will email you through each step of the process when you file for a tax extension with us. In the event you don't find an email from us, it's important that you check your spam mail folder. Alternatively, you can always just log back into your account to check on the status of your extension.</p>`,
        },
        {
          question:
            'What if I file an extension and then decide later to file my tax return on time?',
          answer: `<p>Filing for an extension increases the amount of time you have to file your tax return but it doesn't require that you file after the deadline.Theoretically, you could file a tax extension and then file your tax return minutes later without issue.</p>`,
        },
        {
          question:
            'Can I submit my taxes on the due date despite filing for an extension?',
          answer:
            '<p>Yes, you can choose to file your taxes by the original tax deadline. In that case, the IRS will simply ignore the extension of time requested.</p>',
        },
        {
          question: 'What information do I need to file for a tax extension?',
          answer: `<p>Our process guides you through what information you need to file for your tax extension. You will need basic personal information (name, address, Social Security Number) and in the event you are planning to make a payment with your extension, it's possible you'll need some taxable income information. It's also helpful to have your previous year's tax return on-hand during the extension request process. If you find yourself needing to track down some information to complete your extension, our system automatically saves whatever data you've already enetered so you can easily come back to complete the process.</p>`,
        },
        {
          question:
            'Will I also receive an extension from my State, in addition to my federal tax extension?',
          answer:
            '<p> The short answer is, that depends. There are a number of states that grant automatic extensions upon approval of your federal extension while other states require that you file a form directly with them. Below is a list of 4 categories with a list of states that fall under that category: </p><ul><li><h3> States that automatically file extensions when you file a federal extension: </h3></li><p> Arizona, Arkansas, Connecticut, Delaware, Georgia, Illinois, Indiana, Kentucky, Maryland, Michigan, Mississippi, Missouri, Nebraska, New Jersey, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, West Virginia, Wisconsin </p><li><h3> States that file extensions independent of federal extension status: </h3></li> <p> Alabama, California, Colorado, Hawaii, Idaho, Iowa, Kansas, Massachusetts, Minnesota, Montana, New Hampshire, Utah, Virginia </p><li><h3> States that do NOT accept a federal extension in lieu of a state extension (you must file state separately): </h3></li><p> <span> Louisiana, New York, North Carolina, Tennessee, Vermont </span> </p><li><h3> States that have no income tax and therefore no state extension: </h3></li><p> Alaska, Florida, Nevada, South Dakota, Texas, Washington, Wyoming </p></ul><p> Please check with your state&apos;s tax office for more details. </p>',
        },
        {
          question: 'Do I need to qualify for a tax extension?',
          answer: `<p>There are no IRS requirements for taxpayers to be eligible to file for an income tax extension. The IRS doesn't even require you to give a reason for wanting the extension.That said, all tax extensions must be approved and accepted by the IRS.The IRS matches the information submitted with the extension and compares that information with what they have on file for you.The vast majority of rejections are due to taxpayers submitting data that doesn't match up to IRS records so please be thoughtful when entering your information.</p>`,
        },
        {
          question: 'Will I get a confirmation number with my extension?',
          answer: `<p>We will provide you with our confirmation number, as well as an IRS confirmation number when your extension is approved by the IRS. The confirmation number will be emailed, as well as available when you login to our system.</p>`,
        },
        {
          question:
            'Is it true that you have a greater chance of getting audited if you eFile?',
          answer: `<p>Not true, the IRS doesn't audit efiled returns any more than it audits paper returns, or vice versa.</p>`,
        },
        {
          question:
            'Do I have to file a separate tax extension for business and personal needs?',
          answer: `<p>Yes. The IRS generally requires different tax extension applications for personal extensions and business extensions. The exception is for single member LLC businesses. If you own a single member LLC, then you can file a personal income tax extension (Form 4868) which will extend both your personal and business tax deadline.</p>`,
        },
        {
          question: `Does the IRS need to know why I'm filing an extension?`,
          answer: `<p>No! This is one of the most common misconceptions about tax extensions. The IRS will grant you a six-month extension, no questions asked, as long as you fill out the correct form on time (that's Form 4868 for individual income tax extensions, and Form 7004 for businesses).</p>`,
        },
        {
          question:
            'Should I make a tax payment when I file my income tax extension?',
          answer: `<p>You are not obligated to make a tax payment when you file for your tax extension. However, if you have a tax balance due when you file, penalties or late fees may be assessed if you do not pay the amount owed by the original filing deadline.</p>`,
        },
        {
          question: 'Can I get a refund if my tax extension is not approved?',
          answer: `<p>Once you e-File your extension, your information is sent to the IRS for approval. If you are not approved, a notification will be sent giving reason why the IRS rejected your tax extension application, and we will help to resolve your issue. You can resubmit your application as many times as necessary at no additional charge. However, we do not provide refund once the application is processed.</p>`,
        },
        {
          question:
            'What is the late payment penalty if I do not pay any outstanding tax balance when I file my tax extension?',
          answer: `<p>The IRS' late payment penalty is 0.5% of the taxes not paid, charged per month, up to a maximum of 25%. For example, if you have $2,000 of unpaid taxes, the IRS may charge you $10 per month as a late payment penalty.</p>`,
        },
        {
          question: 'How do I contact you for support or help?',
          answer: `<p>Click on the contact us icon on the website to be in touch with one of our customer support specialists. We will make our best efforts to respond within 24 hours or sooner!</p>`,
        },
        {
          question: 'What if I am unable to login to my account?',
          answer: `<p>If you are having trouble accessing your information, click on the "forgot password" link, and your password will be emailed to you to change it. If that does not work, complete the contact us link and we will get back to you shortly. All methods of support are free of charge.</p>`,
        },
        {
          question:
            'I just filed for a federal extension but cannot pay any of my tax liability – what happens now?',
          answer: `<p>The good news is that as long as your federal extension is approved, you will avoid the costly late filing penalty. However, since you are unable to pay your tax liability, you may charged interest on the amount you owe, which is generally charged at rate of 3%-5% per year. You will be able to calculate any interest owed when you file your final tax return.</p>`,
        },
        {
          question:
            'How do I know if your site is genuine, theft free and valid?',
          answer: `<p>We are an approved IRS e-file provider, which means we have been officially approved to electronically submit data directly to the IRS. Should you have concerns, this can be verified with the IRS directly. Additionally, we take data privacy and security very seriously and are required to pass security and privacy tests by the IRS in order to provide this service.</p>`,
        },
        {
          question: 'Does the IRS offer payment plans for unpaid taxes due?',
          answer: `<p>Yes, the IRS will generally work with individuals and businesses who cannot afford to pay their tax liability by negotiating payment plans or installment agreements. To discuss payment plans, you should contact the IRS directly by submitting IRS Form 9465 (Installment Agreement Request) or by calling 1-800-829-1040.</p>`,
        },
        {
          question:
            'Can I change my information once I submit my tax extension?',
          answer: `<p>Once you submit your federal tax extension, it is automatically routed to the IRS for approval. If your application is rejected by the IRS, you'll be able to fix any errors and resubmit to the IRS for approval.</p>`,
        },
        {
          question:
            'How do I pay any expected taxes when I file my income tax extension?',
          answer: `<p>As an authorized e fle provider, we can submit your extension request on your behalf, however we do not process any tax payments. If you owe taxes to the IRS, visit them directly in order to coordinate the payment of your tax. </p>`,
        },
        {
          question:
            'My tax extension was rejected by the IRS. What should I do now?',
          answer: `<p>If your tax extension is rejected by the IRS, you can fix any errors and resubmit at no additional charge.</p>`,
        },
        {
          question:
            'If I did not file my taxes last year and do not have an Adjusted Gross Income (AGI), can I still use your service?',
          answer: `<p>Yes. The AGI is only needed if you are making an online tax payment to the IRS. If you did not file taxes last year (or do not have your AGI) and need to make a tax payment, we recommend simply filing your extension online and paying the IRS direct via one of the methods specified on their website.</p>`,
        },
        {
          question: 'How do I pay my taxes if I am out of the country?',
          answer: `<p>"If, on the regular due date of your return, you are "out of the country" and are a U.S. citizen or resident, you are allowed 2 extra months to file your return and pay any amount due without requesting an extension. For a calendar year return, this is June 15, <script>currentYear();</script>. File Form 4868 and be sure to check the box on line 8 if you need an additional 4 months to file your return. "Out of the country" means: 1. You live outside the United States and Puerto Rico and your main place of work is outside the United States and Puerto Rico, or 2. You are in military or naval service outside the United States and Puerto Rico. If you qualify as being "out of the country", you will still be eligible for the extension even if you are physically present in the United States or Puerto Rico on the regular due date of the return. "</p>`,
        },
        {
          question: 'What if I Missed the Deadline for a Tax Extension?',
          answer: `<p>If you have missed the deadline for an extension and still haven't completed your taxes, do them ASAP! This will help minimize IRS penalties and interest owed. Remember, if you owed taxes, the money was due to the IRS by April 15th. Even if you can only send in a partial payment, that will help reduce the amount of penalties and interest you owe.</p>`,
        },
        {
          question: `What if I don't get a confirmation email before the deadline?`,
          answer: `<p>As long as your Electronic Postmark Timestamp above is before the deadline in your timezone, your extension will not be considered late, even if it takes a long time to submit or to be acknowledged.</p>`,
        },
        {
          question: `What if there's an error in my submission?`,
          answer: `<p>" When the Internal Revenue Service Acknowledges your submitted Application, they may reject it because it contains errors. If these errors can be corrected, you may VISIT OUR SITE and re-submit your information. As long as you re-submit your application within FIVE CALENDAR DAYS of the rejection, your Electronic Postmark Timestamp will be the same, and, if accepted, your Application will be on time, even if it was re-submitted after the April 18th Deadline. Some errors can't be corrected - usually if there's a problem with your Taxpayer Identification Number, or if an application or return has already been accepted for your Taxpayer Identification Number. In these cases, we recommend that you contact your local Internal Revenue Service Office - <a href="https://www.irs.gov/help/contact-your-local-irs-office" target="_blank" rel="noreferrer">https://www.irs.gov/help/contact-your-local-irs-office</a>.  If the Internal Revenue Service reports any error, we will email you with an explanation of the errors and whether you can correct them. "</p>`,
        },
      ],
      subFields: [
        {
          name: 'question',
          type: 'string',
        },
        {
          name: 'answer',
          type: 'string',
        },
      ],
    },
  ],
})
