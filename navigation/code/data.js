export var selectedDeck;

export function setSelectedDeck(param){
  selectedDeck=param;
}

export var decks = [
    {
      id: 1,
      category: 'choice',
      name: 'Editor Choice 1',
      author: '@allen',
      code: 'CCS111',
      course: 'Computer Science',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'A security system that prevents unauthorized access to external networks.', backContent: 'Firewall' },
        { frontContent: 'A software whose source code is available to the public.', backContent: 'Open-Source Software' },
        { frontContent: 'The domain name or IP address of the server.', backContent: 'HTTP/s' },
        { frontContent: 'A web address used to identify resources on the internet.', backContent: 'URL' },
        { frontContent: 'Main developer of the Android Operating System.', backContent: 'Google' },
      ]
    },
    {
      id: 2,
      category: 'choice',
      name: 'Editor Choice 2',
      author: '@watson',
      code: 'CCS111',
      course: 'Chemical Engineering',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'A security system that prevents unauthorized access to external networks.', backContent: 'Firewall' },
        { frontContent: 'A software whose source code is available to the public.', backContent: 'Open-Source Software' },
        { frontContent: 'The domain name or IP address of the server.', backContent: 'HTTP/s' },
        { frontContent: 'A web address used to identify resources on the internet.', backContent: 'URL' },
        { frontContent: 'Main developer of the Android Operating System.', backContent: 'Google' },
      ]
    },
    {
      id: 3,
      category: 'choice',
      name: 'Editor Choice 3',
      author: '@vhilly',
      code: 'CCS112',
      course: 'Physics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'A security system that prevents unauthorized access to external networks.', backContent: 'Firewall' },
        { frontContent: 'A software whose source code is available to the public.', backContent: 'Open-Source Software' },
        { frontContent: 'The domain name or IP address of the server.', backContent: 'HTTP/s' },
        { frontContent: 'A web address used to identify resources on the internet.', backContent: 'URL' },
        { frontContent: 'Main developer of the Android Operating System.', backContent: 'Google' },
      ]
    },
    {
      id: 4,
      category: 'choice',
      name: 'Editor Choice 4',
      author: '@christine',
      code: 'CCS112',
      course: 'Applied Mathematics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'yes',
      added: 'no',
      flashcards: [
        { frontContent: 'A security system that prevents unauthorized access to external networks.', backContent: 'Firewall' },
        { frontContent: 'A software whose source code is available to the public.', backContent: 'Open-Source Software' },
        { frontContent: 'The domain name or IP address of the server.', backContent: 'HTTP/s' },
        { frontContent: 'A web address used to identify resources on the internet.', backContent: 'URL' },
        { frontContent: 'Main developer of the Android Operating System.', backContent: 'Google' },
      ]
    },

    {
      id: 5,
      category: 'Business and Economics',
      name: 'Business 1',
      author: '@angela',
      code: 'BSE111',
      course: 'Actuarial Sciences',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'He is the father of accounting.', backContent: 'Luca Pacioli' },
        { frontContent: 'The Big Four accounting firms.', backContent: 'Deloitte, KPMG, EY, and PwC' },
        { frontContent: 'The most basic accounting equation.', backContent: 'Assets = Liabilities + Equity' },
        { frontContent: 'The systematic allocation of the cost of a long-term asset over its life.', backContent: 'Depreciation' },
        { frontContent: "Responsible to examine a company's financial statements and records.", backContent: 'Auditor' },
      ]
    },
    {
      id: 6,
      category: 'Business and Economics',
      name: 'Business 2',
      author: '@mak',
      code: 'BSE111',
      course: 'Petroleum Engineering',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'He is the father of accounting.', backContent: 'Luca Pacioli' },
        { frontContent: 'The Big Four accounting firms.', backContent: 'Deloitte, KPMG, EY, and PwC' },
        { frontContent: 'The most basic accounting equation.', backContent: 'Assets = Liabilities + Equity' },
        { frontContent: 'The systematic allocation of the cost of a long-term asset over its life.', backContent: 'Depreciation' },
        { frontContent: "Responsible to examine a company's financial statements and records.", backContent: 'Auditor' },
      ]
    },
    {
      id: 7,
      category: 'Business and Economics',
      name: 'Business 3',
      author: '@deyb',
      code: 'BSE112',
      course: 'Computer Science',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'He is the father of accounting.', backContent: 'Luca Pacioli' },
        { frontContent: 'The Big Four accounting firms.', backContent: 'Deloitte, KPMG, EY, and PwC' },
        { frontContent: 'The most basic accounting equation.', backContent: 'Assets = Liabilities + Equity' },
        { frontContent: 'The systematic allocation of the cost of a long-term asset over its life.', backContent: 'Depreciation' },
        { frontContent: "Responsible to examine a company's financial statements and records.", backContent: 'Auditor' },
      ]
    },
    {
      id: 8,
      category: 'Business and Economics',
      name: 'Business 4',
      author: '@grayedoutname',
      code: 'BSE112',
      course: 'Chemical Engineering',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'He is the father of accounting.', backContent: 'Luca Pacioli' },
        { frontContent: 'The Big Four accounting firms.', backContent: 'Deloitte, KPMG, EY, and PwC' },
        { frontContent: 'The most basic accounting equation.', backContent: 'Assets = Liabilities + Equity' },
        { frontContent: 'The systematic allocation of the cost of a long-term asset over its life.', backContent: 'Depreciation' },
        { frontContent: "Responsible to examine a company's financial statements and records.", backContent: 'Auditor' },
      ]
    },

    {
      id: 9,
      category: 'Communications and Media',
      name: 'Communication 1',
      author: '@yukonseeme',
      code: 'CMD111',
      course: 'Physics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The52nd Best Picture Winner presented by the AMPAS.', backContent: 'Kramer vs Kramer' },
        { frontContent: 'A director known for his teen-oriented films like "The Breakfast Club" (1985).', backContent: 'John Hughes' },
        { frontContent: 'A known collaboration between Steven Spielberg and George Lucas.', backContent: 'Indiana Jones' },
        { frontContent: 'An application of computer graphics which was popularized in the 1980s.', backContent: 'CGI' },
        { frontContent: 'A movie with two sequels influencing the time travel theme in cinema.', backContent: 'Back to the Future' },
      ]
    },
    {
      id: 10,
      category: 'Communications and Media',
      name: 'Communication 2',
      author: '@risti',
      code: 'CMD111',
      course: 'Applied Mathematics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'yes',
      added: 'no',
      flashcards: [
        { frontContent: 'The52nd Best Picture Winner presented by the AMPAS.', backContent: 'Kramer vs Kramer' },
        { frontContent: 'A director known for his teen-oriented films like "The Breakfast Club" (1985).', backContent: 'John Hughes' },
        { frontContent: 'A known collaboration between Steven Spielberg and George Lucas.', backContent: 'Indiana Jones' },
        { frontContent: 'An application of computer graphics which was popularized in the 1980s.', backContent: 'CGI' },
        { frontContent: 'A movie with two sequels influencing the time travel theme in cinema.', backContent: 'Back to the Future' },
      ]
    },
    {
      id: 11,
      category: 'Communications and Media',
      name: 'Communication 3',
      author: '@ang4a',
      code: 'CMD112',
      course: 'Actuarial Sciences',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The52nd Best Picture Winner presented by the AMPAS.', backContent: 'Kramer vs Kramer' },
        { frontContent: 'A director known for his teen-oriented films like "The Breakfast Club" (1985).', backContent: 'John Hughes' },
        { frontContent: 'A known collaboration between Steven Spielberg and George Lucas.', backContent: 'Indiana Jones' },
        { frontContent: 'An application of computer graphics which was popularized in the 1980s.', backContent: 'CGI' },
        { frontContent: 'A movie with two sequels influencing the time travel theme in cinema.', backContent: 'Back to the Future' },
      ]
    },
    {
      id: 12,
      category: 'Communications and Media',
      name: 'Communication 4',
      author: '@makmak',
      code: 'CMD112',
      course: 'Petroleum Engineering',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The52nd Best Picture Winner presented by the AMPAS.', backContent: 'Kramer vs Kramer' },
        { frontContent: 'A director known for his teen-oriented films like "The Breakfast Club" (1985).', backContent: 'John Hughes' },
        { frontContent: 'A known collaboration between Steven Spielberg and George Lucas.', backContent: 'Indiana Jones' },
        { frontContent: 'An application of computer graphics which was popularized in the 1980s.', backContent: 'CGI' },
        { frontContent: 'A movie with two sequels influencing the time travel theme in cinema.', backContent: 'Back to the Future' },
      ]
    },
    {
      id: 13,
      category: 'Computer Science',
      name: 'Computer Science 1',
      author: '@allen',
      code: 'CCS111',
      course: 'Computer Science',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'A set of tools built around React Native to streamline the development process.', backContent: 'Expo' },
        { frontContent: 'An updateable structure used to contain data about components.', backContent: 'State' },
        { frontContent: 'A read-only object which allows passing data between components.', backContent: 'Props' },
        { frontContent: 'A component used to display texts in the screen.', backContent: '<Text></Text>' },
        { frontContent: 'Useful for accessing and interacting with underlying native components.', backContent: 'Ref' },
      ]
    },
    {
      id: 14,
      category: 'Computer Science',
      name: 'Computer Science 2',
      author: '@watson',
      code: 'CCS111',
      course: 'Chemical Engineering',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'A set of tools built around React Native to streamline the development process.', backContent: 'Expo' },
        { frontContent: 'An updateable structure used to contain data about components.', backContent: 'State' },
        { frontContent: 'A read-only object which allows passing data between components.', backContent: 'Props' },
        { frontContent: 'A component used to display texts in the screen.', backContent: '<Text></Text>' },
        { frontContent: 'Useful for accessing and interacting with underlying native components.', backContent: 'Ref' },
      ]
    },
    {
      id: 15,
      category: 'Computer Science',
      name: 'Computer Science 3',
      author: '@vhilly',
      code: 'CCS112',
      course: 'Physics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'A set of tools built around React Native to streamline the development process.', backContent: 'Expo' },
        { frontContent: 'An updateable structure used to contain data about components.', backContent: 'State' },
        { frontContent: 'A read-only object which allows passing data between components.', backContent: 'Props' },
        { frontContent: 'A component used to display texts in the screen.', backContent: '<Text></Text>' },
        { frontContent: 'Useful for accessing and interacting with underlying native components.', backContent: 'Ref' },
      ]
    },
    {
      id: 16,
      category: 'Computer Science',
      name: 'Computer Science 4',
      author: '@christine',
      code: 'CCS112',
      course: 'Applied Mathematics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'yes',
      added: 'no',
      flashcards: [
        { frontContent: 'A set of tools built around React Native to streamline the development process.', backContent: 'Expo' },
        { frontContent: 'An updateable structure used to contain data about components.', backContent: 'State' },
        { frontContent: 'A read-only object which allows passing data between components.', backContent: 'Props' },
        { frontContent: 'A component used to display texts in the screen.', backContent: '<Text></Text>' },
        { frontContent: 'Useful for accessing and interacting with underlying native components.', backContent: 'Ref' },
      ]
    },
    {
      id: 17,
      category: 'Engineering',
      name: 'Engineering 1',
      author: '@angela',
      code: 'ENG111',
      course: 'Actuarial Sciences',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'Refers to the minimization of environmental impact and promotion of energy efficiency.', backContent: 'Sustainability' },
        { frontContent: 'Cities that include intelligent transportation systems and use of data for planning.', backContent: 'Smart Cities' },
        { frontContent: 'An innovative approach for constructing buildings.', backContent: '3D Printing' },
        { frontContent: 'Major Civil Engineering proposals beyond Earth.', backContent: 'Moon and Mars structure constructions' },
        { frontContent: 'The tallest building completed in 2004.', backContent: 'Taipei 101' },
      ]
    },
    {
      id: 18,
      category: 'Engineering',
      name: 'Engineering 2',
      author: '@mark',
      code: 'ENG111',
      course: 'Petroleum Engineering',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'Refers to the minimization of environmental impact and promotion of energy efficiency.', backContent: 'Sustainability' },
        { frontContent: 'Cities that include intelligent transportation systems and use of data for planning.', backContent: 'Smart Cities' },
        { frontContent: 'An innovative approach for constructing buildings.', backContent: '3D Printing' },
        { frontContent: 'Major Civil Engineering proposals beyond Earth.', backContent: 'Moon and Mars structure constructions' },
        { frontContent: 'The tallest building completed in 2004.', backContent: 'Taipei 101' },
      ]
    },
    {
      id: 19,
      category: 'Engineering',
      name: 'Engineering 3',
      author: '@deyb',
      code: 'ENG112',
      course: 'Computer Science',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'Refers to the minimization of environmental impact and promotion of energy efficiency.', backContent: 'Sustainability' },
        { frontContent: 'Cities that include intelligent transportation systems and use of data for planning.', backContent: 'Smart Cities' },
        { frontContent: 'An innovative approach for constructing buildings.', backContent: '3D Printing' },
        { frontContent: 'Major Civil Engineering proposals beyond Earth.', backContent: 'Moon and Mars structure constructions' },
        { frontContent: 'The tallest building completed in 2004.', backContent: 'Taipei 101' },
      ]
    },
    {
      id: 20,
      category: 'Engineering',
      name: 'Engineering 4',
      author: '@grayedoutname',
      code: 'ENG112',
      course: 'Chemical Engineering',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'Refers to the minimization of environmental impact and promotion of energy efficiency.', backContent: 'Sustainability' },
        { frontContent: 'Cities that include intelligent transportation systems and use of data for planning.', backContent: 'Smart Cities' },
        { frontContent: 'An innovative approach for constructing buildings.', backContent: '3D Printing' },
        { frontContent: 'Major Civil Engineering proposals beyond Earth.', backContent: 'Moon and Mars structure constructions' },
        { frontContent: 'The tallest building completed in 2004.', backContent: 'Taipei 101' },
      ]
    },
    {
      id: 21,
      category: 'Health Sciences',
      name: 'Health Sciences 1',
      author: '@yukonseeme',
      code: 'HLT111',
      course: 'Physics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The largest bone in the human body.', backContent: 'Femur' },
        { frontContent: 'The location of the Hyboid Bone in the body.', backContent: 'The neck' },
        { frontContent: 'A part of human skeleton that consists of limbs and girdles.', backContent: 'Appendicular Skeleton' },
        { frontContent: 'The number of bones in the human foot.', backContent: '26 bones' },
      ]
    },
    {
      id: 22,
      category: 'Health Sciences',
      name: 'Health Sciences 2',
      author: '@risti',
      code: 'HLT111',
      course: 'Applied Mathematics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'yes',
      added: 'no',
      flashcards: [
        { frontContent: 'The largest bone in the human body.', backContent: 'Femur' },
        { frontContent: 'The location of the Hyboid Bone in the body.', backContent: 'The neck' },
        { frontContent: 'A part of human skeleton that consists of limbs and girdles.', backContent: 'Appendicular Skeleton' },
        { frontContent: 'The number of bones in the human foot.', backContent: '26 bones' },
      ]
    },
    {
      id: 23,
      category: 'Health Sciences',
      name: 'Health Sciences 3',
      author: '@ang4a',
      code: 'HLT112',
      course: 'Actuarial Sciences',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The largest bone in the human body.', backContent: 'Femur' },
        { frontContent: 'The location of the Hyboid Bone in the body.', backContent: 'The neck' },
        { frontContent: 'A part of human skeleton that consists of limbs and girdles.', backContent: 'Appendicular Skeleton' },
        { frontContent: 'The number of bones in the human foot.', backContent: '26 bones' },
      ]
    },
    {
      id: 24,
      category: 'Health Sciences',
      name: 'Health Sciences 4',
      author: '@makmak',
      code: 'HLT112',
      course: 'Petroleum Engineering',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The largest bone in the human body.', backContent: 'Femur' },
        { frontContent: 'The location of the Hyboid Bone in the body.', backContent: 'The neck' },
        { frontContent: 'A part of human skeleton that consists of limbs and girdles.', backContent: 'Appendicular Skeleton' },
        { frontContent: 'The number of bones in the human foot.', backContent: '26 bones' },
      ]
    },
    {
      id: 25,
      category: 'Mathematics and Statistics',
      name: 'Mathematics 1',
      author: '@allen',
      code: 'MTH111',
      course: 'Computer Science',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The transformation of data to have a mean of 0.', backContent: 'Standardization' },
        { frontContent: 'An area composed of polynomial features, one-hot encoding, and scaling.', backContent: 'Feature Engineering' },
        { frontContent: 'The evaluation of performances of regression models.', backContent: 'Mean Squared Error' },
        { frontContent: 'A function used in neural networks.', backContent: 'Sigmoid Function' },
        { frontContent: 'Foundational mathematical concept in machine learning.', backContent: 'Linear Algebra' },
      ]
    },
    {
      id: 26,
      category: 'Mathematics and Statistics',
      name: 'Mathematics 2',
      author: '@watson',
      code: 'MTH111',
      course: 'Chemical Engineering',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The transformation of data to have a mean of 0.', backContent: 'Standardization' },
        { frontContent: 'An area composed of polynomial features, one-hot encoding, and scaling.', backContent: 'Feature Engineering' },
        { frontContent: 'The evaluation of performances of regression models.', backContent: 'Mean Squared Error' },
        { frontContent: 'A function used in neural networks.', backContent: 'Sigmoid Function' },
        { frontContent: 'Foundational mathematical concept in machine learning.', backContent: 'Linear Algebra' },
      ]
    },
    {
      id: 27,
      category: 'Mathematics and Statistics',
      name: 'Mathematics 3',
      author: '@vhilly',
      code: 'MTH112',
      course: 'Physics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The transformation of data to have a mean of 0.', backContent: 'Standardization' },
        { frontContent: 'An area composed of polynomial features, one-hot encoding, and scaling.', backContent: 'Feature Engineering' },
        { frontContent: 'The evaluation of performances of regression models.', backContent: 'Mean Squared Error' },
        { frontContent: 'A function used in neural networks.', backContent: 'Sigmoid Function' },
        { frontContent: 'Foundational mathematical concept in machine learning.', backContent: 'Linear Algebra' },
      ]
    },
    {
      id: 28,
      category: 'Mathematics and Statistics',
      name: 'Mathematics 4',
      author: '@christine',
      code: 'MTH112',
      course: 'Applied Mathematics',
      school: 'Far Eastern University',
      created: 'yes',
      favorite: 'yes',
      added: 'no',
      flashcards: [
        { frontContent: 'The transformation of data to have a mean of 0.', backContent: 'Standardization' },
        { frontContent: 'An area composed of polynomial features, one-hot encoding, and scaling.', backContent: 'Feature Engineering' },
        { frontContent: 'The evaluation of performances of regression models.', backContent: 'Mean Squared Error' },
        { frontContent: 'A function used in neural networks.', backContent: 'Sigmoid Function' },
        { frontContent: 'Foundational mathematical concept in machine learning.', backContent: 'Linear Algebra' },
      ]
    },
    {
      id: 29,
      category: 'Natural Sciences',
      name: 'Natural Sciences 1',
      author: '@angela',
      code: 'NTR111',
      course: 'Actuarial Sciences',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The oldest known star in the universe.', backContent: 'Methuselah' },
        { frontContent: 'The closest planet to Earth.', backContent: 'Venus' },
        { frontContent: 'A planet orbiting in a habitable sone where liquid could exist.', backContent: 'Kepler-22b' },
        { frontContent: 'A short-period comet visible from Earth every 75-79 years.', backContent: "Haley's Comet"},
        { frontContent: 'A luminous explosion during the last stage of a massive star.', backContent: 'Supernova' },
      ]
    },
    {
      id: 30,
      category: 'Natural Sciences',
      name: 'Natural Sciences 2',
      author: '@mark',
      code: 'NTR111',
      course: 'Petroleum Engineering',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The oldest known star in the universe.', backContent: 'Methuselah' },
        { frontContent: 'The closest planet to Earth.', backContent: 'Venus' },
        { frontContent: 'A planet orbiting in a habitable sone where liquid could exist.', backContent: 'Kepler-22b' },
        { frontContent: 'A short-period comet visible from Earth every 75-79 years.', backContent: "Haley's Comet"},
        { frontContent: 'A luminous explosion during the last stage of a massive star.', backContent: 'Supernova' },
      ]
    },
    {
      id: 31,
      category: 'Natural Sciences',
      name: 'Natural Sciences 3',
      author: '@deyb',
      code: 'NTR112',
      course: 'Computer Science',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The oldest known star in the universe.', backContent: 'Methuselah' },
        { frontContent: 'The closest planet to Earth.', backContent: 'Venus' },
        { frontContent: 'A planet orbiting in a habitable sone where liquid could exist.', backContent: 'Kepler-22b' },
        { frontContent: 'A short-period comet visible from Earth every 75-79 years.', backContent: "Haley's Comet"},
        { frontContent: 'A luminous explosion during the last stage of a massive star.', backContent: 'Supernova' },
      ]
    },
    {
      id: 32,
      category: 'Natural Sciences',
      name: 'Natural Sciences 4',
      author: '@grayedoutname',
      code: 'NTR112',
      course: 'Chemical Engineering',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The oldest known star in the universe.', backContent: 'Methuselah' },
        { frontContent: 'The closest planet to Earth.', backContent: 'Venus' },
        { frontContent: 'A planet orbiting in a habitable sone where liquid could exist.', backContent: 'Kepler-22b' },
        { frontContent: 'A short-period comet visible from Earth every 75-79 years.', backContent: "Haley's Comet"},
        { frontContent: 'A luminous explosion during the last stage of a massive star.', backContent: 'Supernova' },
      ]
    },
    {
      id: 33,
      category: 'Social Sciences',
      name: 'Social Sciences 1',
      author: '@yukonseeme',
      code: 'SCL111',
      course: 'Physics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The Section 3 of the RA 10354.', backContent: 'Guiding Principles for Implementation' },
        { frontContent: 'States the Procurement and Distribution of Family Planning Supplies.', backContent: 'Section 10' },
        { frontContent: 'The hours encouraged for pro bono services.', backContent: '48 hours' },
        { frontContent: "The Section 20 of the RH Law's reference in counseling methods.', backContent: 'Section 4" },
        { frontContent: 'Composed of 5 member from the Senate to monitor the RH Act.', backContent: 'COC' },
      ]
    },
    {
      id: 34,
      category: 'Social Sciences',
      name: 'Social Sciences 2',
      author: '@risti',
      code: 'SCL111',
      course: 'Applied Mathematics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'yes',
      added: 'no',
      flashcards: [
        { frontContent: 'The Section 3 of the RA 10354.', backContent: 'Guiding Principles for Implementation' },
        { frontContent: 'States the Procurement and Distribution of Family Planning Supplies.', backContent: 'Section 10' },
        { frontContent: 'The hours encouraged for pro bono services.', backContent: '48 hours' },
        { frontContent: "The Section 20 of the RH Law's reference in counseling methods.', backContent: 'Section 4" },
        { frontContent: 'Composed of 5 member from the Senate to monitor the RH Act.', backContent: 'COC' },
      ]
    },
    {
      id: 35,
      category: 'Social Sciences',
      name: 'Social Sciences 3',
      author: '@ang4a',
      code: 'SCL112',
      course: 'Actuarial Sciences',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The Section 3 of the RA 10354.', backContent: 'Guiding Principles for Implementation' },
        { frontContent: 'States the Procurement and Distribution of Family Planning Supplies.', backContent: 'Section 10' },
        { frontContent: 'The hours encouraged for pro bono services.', backContent: '48 hours' },
        { frontContent: "The Section 20 of the RH Law's reference in counseling methods.', backContent: 'Section 4" },
        { frontContent: 'Composed of 5 member from the Senate to monitor the RH Act.', backContent: 'COC' },
      ]
    },
    {
      id: 36,
      category: 'Social Sciences',
      name: 'Social Sciences 4',
      author: '@makmak',
      code: 'SCL112',
      course: 'Petroleum Engineering',
      school: 'Adamson University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'The Section 3 of the RA 10354.', backContent: 'Guiding Principles for Implementation' },
        { frontContent: 'States the Procurement and Distribution of Family Planning Supplies.', backContent: 'Section 10' },
        { frontContent: 'The hours encouraged for pro bono services.', backContent: '48 hours' },
        { frontContent: "The Section 20 of the RH Law's reference in counseling methods.', backContent: 'Section 4" },
        { frontContent: 'Composed of 5 member from the Senate to monitor the RH Act.', backContent: 'COC' },
      ]
    },
    
    {
      id: 37,
      category: 'Others',
      name: 'Others 1',
      author: '@allen',
      code: 'MTH111',
      course: 'Computer Science',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'Also known as color therapy and used as medicine to promote healing.', backContent: 'Chromotherapy' },
        { frontContent: 'Meaning of the color red in Eastern culture.', backContent: 'Prosperity' },
        { frontContent: 'Examples include red-orange, yellow-green, and blue-violet.', backContent: 'Tertiary Colors' },
        { frontContent: 'Colors that evoke a sense of calmness and tranquility.', backContent: 'Blue, green, purple' },
        { frontContent: 'Relationship between pairs of colors that cancel each other out.', backContent: 'Complementary' },
      ]
    },
    {
      id: 38,
      category: 'Others',
      name: 'Others 2',
      author: '@watson',
      code: 'SCL112',
      course: 'Chemical Engineering',
      school: 'University of the East',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'Also known as color therapy and used as medicine to promote healing.', backContent: 'Chromotherapy' },
        { frontContent: 'Meaning of the color red in Eastern culture.', backContent: 'Prosperity' },
        { frontContent: 'Examples include red-orange, yellow-green, and blue-violet.', backContent: 'Tertiary Colors' },
        { frontContent: 'Colors that evoke a sense of calmness and tranquility.', backContent: 'Blue, green, purple' },
        { frontContent: 'Relationship between pairs of colors that cancel each other out.', backContent: 'Complementary' },
      ]
    },
    {
      id: 39,
      category: 'Others',
      name: 'Others 3',
      author: '@vhilly',
      code: 'ENG112',
      course: 'Physics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [
        { frontContent: 'Also known as color therapy and used as medicine to promote healing.', backContent: 'Chromotherapy' },
        { frontContent: 'Meaning of the color red in Eastern culture.', backContent: 'Prosperity' },
        { frontContent: 'Examples include red-orange, yellow-green, and blue-violet.', backContent: 'Tertiary Colors' },
        { frontContent: 'Colors that evoke a sense of calmness and tranquility.', backContent: 'Blue, green, purple' },
        { frontContent: 'Relationship between pairs of colors that cancel each other out.', backContent: 'Complementary' },
      ]
    },
    {
      id: 40,
      category: 'Others',
      name: 'Others 4',
      author: '@christine',
      code: 'HLT112',
      course: 'Applied Mathematics',
      school: 'Far Eastern University',
      created: 'no',
      favorite: 'yes',
      added: 'no',
      flashcards: [
        { frontContent: 'Also known as color therapy and used as medicine to promote healing.', backContent: 'Chromotherapy' },
        { frontContent: 'Meaning of the color red in Eastern culture.', backContent: 'Prosperity' },
        { frontContent: 'Examples include red-orange, yellow-green, and blue-violet.', backContent: 'Tertiary Colors' },
        { frontContent: 'Colors that evoke a sense of calmness and tranquility.', backContent: 'Blue, green, purple' },
        { frontContent: 'Relationship between pairs of colors that cancel each other out.', backContent: 'Complementary' },
      ]
    },
    
  ]