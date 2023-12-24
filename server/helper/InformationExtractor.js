/* All the processing is applied on the basis of pattern found in various valid Thai IDs */

//first name
const findFirstName = (words,lowerWords) => {
    let i = 0 , len = words.length;
    while(i<len && lowerWords[i]!=='name'){
        i++;
    }
    if(i==len)
    return null;

    let firstName = '';
    i++;
    while(i+1<len && lowerWords[i]!=='last'){
        firstName += words[i] + ' ';
        i++;
    }

    return firstName.trim();
}

//last name
const findLastName = (words,lowerWords) => {
    const len = words.length;
    let i = 0;

    while (i < len && lowerWords[i] !== 'last') {
        i++;
    }

    if (i === len) {
        return null;
    }

    i+=2;
    let lastName = i<len ? words[i] : null;

    return lastName.trim();
};

//identification number
const findIdNumber = (words,lowerWords) => {
    const len = words.length;
    let i = 0;
    while(i<len && lowerWords[i] !== 'thai') {
        i++;
    }

    if(i===len)
    return null;

    let Id = '';
    i+=4;

    while(i<len && lowerWords[i]!=='เลขประจำตัวประชาชน'){
        Id += words[i];
        i++;
    }
    
    return Id;
};

//date of birth
const findDOB = (words,lowerWords) => {
    const len = words.length;
    let i = 0;

    for (; i < len; i++) {
        if (lowerWords[i] === 'date' && lowerWords[i + 1] === 'of' && lowerWords[i + 2] === 'birth') {
            break;
        }
    }

    if(i==len)
    return null;

    let DOB = '';

    if(i+3<len && i+4<len && i+5<len)
    DOB += words[i+3]+' '+words[i+4]+' '+words[i+5];

    else return null;

    return DOB;
};

//date of issue
const findDOI = (words,lowerWords) => {
    const len = words.length;
    let i = 0;

    for (; i < len; i++) {
        if (lowerWords[i] === 'date' && lowerWords[i + 1] === 'of' && lowerWords[i + 2] === 'issue') {
            break;
        }
    }

    if(i==len)
    return null;

    let DOI = '';
    
    if(i>=1 && i>=2 && i>=3)
    DOI += words[i-3]+' '+words[i-2]+' '+words[i-1];

    else return null;
    
    return DOI;
};

//date of expiry
const findDOE = (words,lowerWords) => {
  
    const len = words.length;
    let i = 0;

    for (; i < len; i++) {
        if (lowerWords[i] === 'date' && lowerWords[i + 1] === 'of' && lowerWords[i + 2] === 'expiry') {
            break;
        }
    }

    if(i==len)
    return null;

    let DOI = '';

    if(i>=1 && i>=2 && i>=3)
    DOI += words[i-3]+' '+words[i-2]+' '+words[i-1];

    else return null;
    
    return DOI;
};

//converting text to lowercase
const convertToLowerCase = (text) => {
    return text.toLowerCase();
};

// Function to extract information
module.exports = extractInformation = (text) => {
  const textWithoutDots = text.replace(/\./g, '');
  const lowerText = convertToLowerCase(textWithoutDots);
  const lowerWords = lowerText.split(/\s+/);
  const words = textWithoutDots.split(/\s+/);

  let name = '';
  let lastName = '';
  let idNumber = '';
  let dateOfBirth = '';
  let dateOfIssue = '';
  let dateOfExpiry = '';

  let nullCount = 0;
  //first name
  name = findFirstName(words,lowerWords);
  lastName = findLastName(words,lowerWords);
  idNumber = findIdNumber(words,lowerWords);
  dateOfBirth = findDOB(words,lowerWords);
  dateOfIssue = findDOI(words,lowerWords);
  dateOfExpiry = findDOE(words,lowerWords);
  
  if(name===null) nullCount+=1;
  if(lastName===null) nullCount+=1;
  if(idNumber===null) nullCount+=1;
  if(dateOfBirth===null) nullCount+=1;
  if(dateOfExpiry===null) nullCount+=1;
  if(dateOfIssue===null) nullCount+=1;

  let success_percentage = parseInt(((6-nullCount)*100)/6);
  return {
    information : {
    name,
    lastName,
    idNumber,
    dateOfBirth,
    dateOfIssue,
    dateOfExpiry,
    imageURL : ''
  } , 
  success_percentage : success_percentage
};

}