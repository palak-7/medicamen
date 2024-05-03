-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2024 at 02:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medicamen`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `subject` varchar(2000) NOT NULL,
  `message` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `email`, `phone`, `subject`, `message`) VALUES
('d6bc2efc-ad08-4e61-a757-1a7c274be5eb', 'palaksehgal0707@gmail.com', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `subcontent` varchar(200) NOT NULL,
  `content` mediumtext NOT NULL,
  `date` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `subcontent`, `content`, `date`, `category`, `img`) VALUES
(1, 'Medicamen Biotech’s USFDA filing sparks 5.12 per cent surge in shares', 'Medicamen Biotech filed its first Abbreviated New Drug Application in eCTD format for ‘BORTEZOMIB FOR injection 3.5 MG/VIAL’ with the US Food and Drug Administration', '<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><span style=\'font-size: 17px; font-family: \"Times New Roman\", Times, serif;\'>Medicamen Biotech Ltd (MBL) has filed its first Abbreviated New Drug Application (ANDA) in eCTD format for &lsquo;BORTEZOMIB FOR injection 3.5 MG/VIAL&rdquo; with the US Food and Drug Administration (USFDA). This accomplishment marks a significant milestone for the company, and is expected to prompt a USFDA audit in the future.&nbsp;</span></p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><span style=\'font-size: 17px; font-family: \"Times New Roman\", Times, serif;\'>MBL&rsquo;s Research and Development team has internally developed the BORTEZOMIB Active Pharmaceutical Ingredient (API). Shivalik Rasayan Ltd, MBL&rsquo;s holding company, is responsible for manufacturing the API and has filed the Drug Master File (DMF) of the BORTEZOMIB API with the USFDA. They have also authorised Medicamen Biotech Ltd to use the API for manufacturing BORTEZOMIB injection (3.5 MG/VIAL).</span></p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><span style=\'font-size: 17px; font-family: \"Times New Roman\", Times, serif;\'>Medicamen Biotech&rsquo;s shares went up by 5.12 per cent to Rs 755.30 at 01:32 p.m. on BSE.</span></p>', 'February 19, 2019', 'Insurance', 'news-5.png'),
(2, 'MEDICAMEN BIOTECH के शेयरों में 6% का उछाल, BORTEZOMIB इंजेक्शन के लिए सफल ANDA फाइलिंग के बाद चढ़े शेयर', 'Medicamen ने US फूड एंड ड्रग एडमिनिस्ट्रेशन (USFDA) के साथ BORTEZOMIB इंजेक्शन के लिए अपना पहला Abbreviated न्यूज ड्रग एप्लिकेशन (ANDA) दायर किया है। कंपनी ने 19 जुलाई को एक्सचेंजों को एक फाइलिंग के म', '<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><span style=\"text-align: left;color: rgb(49, 49, 49);background-color: rgb(255, 255, 255);font-size: 15px;\">Medicamen Biotech&nbsp;के शेयरों में आज 19 जुलाई को 6 फीसदी से अधिक की रैली देखी गई। इस समय यह स्टॉक NSE पर 6.68 फीसदी की बढ़त के साथ 768 रुपये के भाव पर ट्रेड कर रहा है। दरअसल, Medicamen ने US फूड एंड ड्रग एडमिनिस्ट्रेशन (USFDA) के साथ BORTEZOMIB इंजेक्शन के लिए अपना पहला Abbreviated न्यूज ड्रग एप्लिकेशन (ANDA) दायर किया है। कंपनी ने 19 जुलाई को एक्सचेंजों को एक फाइलिंग के माध्यम से यह जानकारी दी। इस घोषणा के बाद कंपनी के शेयरों में जमकर खरीदारी देखी जा रही है।</span><br style=\"text-align: left;color: rgb(49, 49, 49);background-color: rgb(255, 255, 255);font-size: 15px;border: 0px;\"><br style=\"text-align: left;color: rgb(49, 49, 49);background-color: rgb(255, 255, 255);font-size: 15px;border: 0px;\"><span style=\"text-align: left;color: rgb(49, 49, 49);background-color: rgb(255, 255, 255);font-size: 15px;\">Medicamen ने कहा, &quot;यह कंपनी के लिए एक बड़ी उपलब्धि है। यह आने वाले समय में USFDA ऑडिट का कारण बनेगा ।&quot; FY23 में कंपनी का राजस्व सालाना आधार पर 20 फीसदी बढ़कर 138 करोड़ रुपये हो गया। इसके अलावा, इस अवधि में ऑपरेटिंग प्रॉफिट मार्जिन 18 फीसदी तक गिर गया जबकि नेट प्रॉफिट 15 करोड़ रुपये मूल्य पर बरकरार रहा। FY23 के लिए स्टॉक की अर्निंग पर शेयर (EPS) 3 फीसदी गिरकर 11.86 रुपये हो गई।</span></p>', 'December 03, 2018', 'Commercial', 'news-4.png'),
(3, 'MEDICAMEN BIOTECH GAINS ON SUCCESSFUL ANDA FILING FOR BORTEZOMIB INJECTIONS', 'Medicamen stated that this represents a significant achievement for the company, which will eventually lead to a USFDA Audit.', '<p style=\"text-align: left;color: rgb(49, 49, 49);background-color: rgb(255, 255, 255);font-size: 15px;border: 0px;\"><a href=\"https://www.moneycontrol.com/india/stockpricequote/pharmaceuticals/medicamenbiotech/MB\" target=\"_blank\" rel=\"noopener noreferrer\">Medicamen Biotech </a><span style=\"font-size: 16px;\">shares were up 6 percent at Rs 759.20 on July 19 at 1:15 pm, with 56,517 shares changing hands on NSE.</span></p>\r\n<div style=\"text-align: left;color: rgb(49, 49, 49);background-color: rgb(255, 255, 255);font-size: 15px;border: 0px;\"><span style=\"font-size: 16px;\">&nbsp;</span></div>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><span style=\"font-size: 16px;\">Medicamen has successfully filed its first Abbreviated New Drug Application (ANDA) for the BORTEZOMIB injection with the US Food and Drug Administration (USFDA), the company announced on July 19 through a filing to the exchanges.</span></p>\r\n<div style=\"text-align: left;color: rgb(49, 49, 49);background-color: rgb(255, 255, 255);font-size: 15px;border: 0px;\">\r\n    <div style=\"border: 0px; line-height: 2;\"><span style=\"font-size: 16px;\">&nbsp;</span></div>\r\n</div>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><span style=\"font-size: 16px;\"><strong style=\"border: 0px;\">Also Read:</strong></span><span style=\"font-size: 16px;\"><a href=\"https://www.moneycontrol.com/news/business/stocks/buy-polycab-india-target-of-rs-4100-icici-securities-10987821.html\" target=\"_blank\" rel=\"noopener noreferrer\"><strong style=\"border: 0px;\"> Hold Polycab India; target of Rs 4100: ICICI Securities</strong></a></span></p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><span style=\"font-size: 16px;\">&ldquo;This is major milestone for the Company which will trigger USFDA Audit in due course of time&rdquo; said Medicamen.</span></p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><span style=\"font-size: 16px;\">For the quarter ended March, the company reported a <a href=\"https://www.moneycontrol.com/news/business/earnings/medicamen-bio-consolidated-march-2023-net-sales-at-rs-38-67-crore-up-69-93-y-o-y-10696561.html\" style=\"color: rgb(49, 49, 49);font-size: 15px;border: 0px;\">20 percent year-on-year increase in revenue </a>to Rs 138 crore in FY23 as against the previous year. The Operating Profit Margins fell to 18 percent while the net profit retained the Rs 15 crore value. The Earnings per Share (EPS) for the stock fell by 3 percent to Rs 11.86 for FY23.</span></p>', 'December 03, 2018', 'Residential', 'news-3.png'),
(4, 'IN CONVERSATION WITH RAHUL BISHNOI CHAIRMAN, MEDICAMEN BIOTECH LIMITED', 'What you can tell us about your Oncology Products to be launched on January 1st 2022. How big is the opportunity in domestic market?', '<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\">What you can tell us about your Oncology Products to be launched on January 1st 2022. How big is the opportunity in domestic market? Medicamen has been exporting pharma products right from its inception since 1996. In one of the major developments, we have recently established a US compliant ONCO formulation facility at Haridwar, and have strategically chosen to launch oncology products in the domestic market. We are quite enthusiastic and passionate to offer global quality oncology products for patients in Indian market where we want to ensure that each patient get global quality product with affordable price which will help to reduce his burden of &ldquo;Out of Pocket Expense&rdquo; in getting &ldquo;Quality Cancer Care&rdquo; with affordability. We are entering in domestic market with our focused approach in Oncology space with novel targeted therapy in treatment of Solid Tumors and Hematology Cancer in the month of January 2022.</p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\">Total domestic market size for Oncology Drugs is Rs 5000 crores approximately with 5-year CAGR (expected growth) of 12%. The current annual overall segment growth is only 7% because of nationwide lockdown during Covid-19 pandemic. Target therapy is the current market driver which contributes to 50% of market pie in total oncology markets where our focus is and today it drives growth of 12.5% which is estimated to grow 20% plus in next three years in the domestic market space.</p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\">Please note, MEDICAMEN Biotech Limited (MBL) is committed to providing quality medicines at an affordable cost through relentless pursuit of excellence in its operations, product quality, documentation and service.</p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><strong style=\"border: 0px;\">What are the key growth drivers of your company?</strong><br style=\"border: 0px;\">First and foremost is the combination of Products and Technology backed by experienced R&amp;D human resource coupled with patient centric approach with affordable &amp; Quality Cancer products which goes by our mantra of Quality Cancer Care!</p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\">Second is to Develop and Launch products in targeted therapy segment in cancer having high incidence like Breast, Lung &amp; Hematological Cancers.</p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\">Leading the way to launch 1st Indian branded generics in oncology with in-house R&amp;D, API &amp; Manufacturing Expertise Domestic as well as South-East Asian markets.</p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\">We believe our strengths are aligned with the growth opportunities. The growth drivers are in place and we have the right capabilities to tap the opportunities.</p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><strong style=\"border: 0px;\">What are your expansion plans in coming three years?</strong><br style=\"border: 0px;\">I have already mentioned that we have recently completed capex for Oncology formulation plant at Haridwar. Currently the plant is under product validation stage. The product launch got delay by one year because of COVID. We see our next leg of growth coming from oncology segment from regulated markets where we shall be filing at least two ANDA next year. Apart from this, we have developed 10 products in R&amp;D for regulated market specially for Australia and EU. Supportive care in Oncology is also one of our focus areas to develop and manufacture products for managing side-effects caused by chemo-therapy drugs treatment.</p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><strong style=\"border: 0px;\">How big is your R&amp;D spend?</strong><br style=\"border: 0px;\">We have established a state-of-the-art R&amp;D in the year 2018 by spending Rs 15 crores in 6000 sq.ft. area at our Bhiwadi campus. Today we have a team of 60 experience scientist under the leadership of Dr. Akshay Kant Chaturvedi. Dr. Chaturvedi has experience of working with Shilpa Medicare, Granules India and Dr. Reddy&rsquo;s Lab. During this current financial year, we have spent another Rs15 crores in R&amp;D by expanding it into 12000 sq. ft area. We have got the best-in-class equipment&rsquo;s in our R&amp;D which is approved by DSIR. The R&amp;D team in fully capable of handling para-4 filing. I must emphasis R&amp;D is our core strength.</p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><strong style=\"border: 0px;\">What are top three strategic Initiatives at this point of time?</strong><br style=\"border: 0px;\">We have adopted a focused approach to achieving our growth objectives. Following are our top three strategic initiatives at this point of time:-<br style=\"border: 0px;\">1. Transform lives of cancer patients by increasing access to affordable &ndash; global quality products in India<br style=\"border: 0px;\">2. Leveraging R&amp;D Capabilities to innovate drug delivery systems for improving Compliance and Quality of life in cancer patient and to develop novel targeted therapies with fast pace.<br style=\"border: 0px;\">3. Filing core products ANDAs in Oncology</p>\r\n<p style=\"text-align: left; color: rgb(49, 49, 49); background-color: rgb(255, 255, 255); font-size: 15px; border: 0px; line-height: 2;\"><strong style=\"border: 0px;\">What are the key risks facing your internal growth objectives?</strong><br style=\"border: 0px;\">1. Due to current pandemic scenario the overall cancer therapy market growth is lower which will take next 1-2 years to stabilize.<br style=\"border: 0px;\">2. The procurement process for new hospital formulary is extended due to pandemic still old products are continued.</p>', 'December 03, 2018', 'Economy', 'news-2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
