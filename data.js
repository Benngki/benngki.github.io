var home_title = "";

var about_me_desc = [
"As a dedicated Computer Science student at BINUS University, I'm currently sharpening my expertise through Bangkit Academy's Machine Learning Cohort, an initiative led by tech giants Google, Tokopedia, Gojek, and Traveloka. My academic journey is complemented by a strong command of Python, skills I've demonstrated by securing relevant certifications from Coursera, Kaggle and HackerRank.",
"Motivated by the transformative potential of AI, I delve into areas like Computer Vision and Natural Language Processing, translating theoretical knowledge into practical solutions. My academic endeavors are guided by a commitment to teamwork and effective communication, laying the groundwork for a future at the forefront of AI innovation.",
]

var projects = {
    "badut-temple": {
        'title': 'Badut Temple',
        'year': 2022,
        'links': [
            "https://wibaku.000webhostapp.com/",
            "https://wibaku.sinamlab.com/",
            "https://github.com/Benngki/web-project-wibaku"
        ],
        'desc': 'WiBaKu Team is the founder of the Badut Temple website that provides ticket booking services and other interesting information. The Badut Temple website is one of the websites in Indonesia that supports the preservation of historical culture through building objects. In addition, the Badut Temple Website also makes a 3-dimensional model of the Badut Temple tourist attraction. Therefore, the Badut Temple Website can introduce places or objects of temple buildings to the younger generation and keep up with the times that require visualization in the form of 3-dimensional models.',
        'photos': ['1.jpg', '2.jpg', '3.jpg'],
    },
    "moscilabrew": {
        'title': 'MoscilaBrew',
        'year': 2023,
        'links': ["https://github.com/Rusty-Boi/MoscilaBrew"],
        'desc': 'MoscilaBrew is a website that makes it easy for coffee lovers to create their best brews. This website provides a large selection of coffee beans that users can use in their coffee concoctions. In addition to helping consumers, Moscila Brew can also help vendors and farmers in selling their coffee beans. The success rate value of the testing assessment analysis for the Vendor page is 79.77% while, for the user page is 84.95%.',
        'photos': ['1.jpg', '2.jpg'],
    },
    "hate-speech-detection": {
        'title': 'Hate Speech Detection',
        'year': 2023,
        'links': ["https://github.com/RamadhanIY/Hate-Speech-Detection-Using-IndoBERT"],
        'desc': "Investigating the use of IndoBERT, a finetuned BERT model, to improve the identification of hate speech during the 2024 Indonesian Presidential Election. This research focuses on hate speech in the context of presidential elections and the challenges it poses on social media. In this paper, we utilize Twitter as a case study to develop an effective hate speech identification technique. The method consists of refining IndoBERT using a dataset of Indonesian tweets regarding the election that have been pre-processed to reduce noise and classified as hate speech or non-hate speech using a pre-trained model. The accuracy, precision, gain and F1 score of the model were used to assess its performance. The results show that the IndoBERT model detects hate speech in Indonesian Twitter data with high accuracy with 92% accuracy.",
        'photos': ['1.jpg', '2.jpg', '3.jpg'],
    },
    "stuntmed": {
        'title': 'Stuntmed',
        'year': '2023',
        'links': [
            "https://github.com/RamadhanIY/StuntMed_e-health",
            'https://youtu.be/S9fQPGfzdpY?si=OngHeq-czK69wr4-'
        ],
        'desc': "StuntMed is an innovative application designed to address the global challenge of stunting in children. By integrating advanced Machine Learning algorithms, StuntMed can accurately detect early signs of stunting through various indicators and data inputs. This digital tool simplifies the process of stunting diagnosis, enabling timely interventions and promoting better health outcomes for children at risk. In this project, my role are Project manager and Mobile Developer.",
        'photos': ['2.jpg', '3.jpg', '1.jpg'],
    },
    "dialog-diri": {
        'title': 'Dialog Diri',
        'year': '2023',
        'links': [
            "https://github.com/Benngki/eureka",
        ],
        'desc': "Eureka is a team of three that focuses on web development about mental health. DialogDiri is a website developed by Eureka, and is currently still under development. DialogDiri aims to be a place for people who experience problems related to their mental health, especially young people. DialogDiri itself provides services in the form of consulting mental health problems by chatbot to consulting with a psychologist.",
        'photos': ['1.jpg', '2.jpg'],
    },
    "image-colorization": {
        'title': 'Image Colorization',
        'year': '2023',
        'links': [
            "https://github.com/Benngki/image_colorization",
        ],
        'desc': "This project aims to create a deep learning model that can predict colors in grayscale images (Image Colorization). The model is trained by preparing a dataset of images converted from RGB to LAB channel, using L channel as input and AB channel as target. Next, a DCNN model consisting of Encoder-Decoder is trained using the dataset. As a result, the model is able to predict color information from a given grayscale image, converting it into a color image.",
        'photos': ['1.jpg'],
    },
    // "javanese-script-translation": {
    //     'title': 'Plant Desease Detection',
    //     'year': '2024 - Now',
    //     'links': [
    //         "https://github.com/Benngki/eureka",
    //     ],
    //     'desc': "Eureka is a team of three that focuses on web development about mental health. DialogDiri is a website developed by Eureka, and is currently still under development. DialogDiri aims to be a place for people who experience problems related to their mental health, especially young people. DialogDiri itself provides services in the form of consulting mental health problems by chatbot to consulting with a psychologist.",
    //     'photos': ['1.jpg', '2.jpg'],
    // },
    // "patera": {
    //     'title': 'Plant Desease Detection',
    //     'year': '2024 - Now',
    //     'links': [
    //         "...",
    //     ],
    //     'desc': "...",
    //     'photos': ['1.jpg', '2.jpg'],
    // }
}

var menus = ["#home", "#about_me", "#skills", "#portfolio", "#contact_me"]