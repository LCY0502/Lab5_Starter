// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// test(description, function)
// TODO - Part 2

// Phone Number
{
  test("PhoneNumber1: is '(592)-510-0775' a phone number?",()=>{
  expect(isPhoneNumber("(592)-510-0775")).toBe(true);
}
  );

  test("PhoneNumber2: is '(123)-456-7890' a phone number?",()=>{
    expect(isPhoneNumber("(123)-456-7890")).toBe(true);
  }
  );

  test("PhoneNumber3: is '(123)-abc-defg' a phone number?",()=>{
    expect(isPhoneNumber("(123)-abc-defg")).toBe(false);
  });

  test("PhoneNumber4: is 'phoneNumber' a phone number?",()=>{
    expect(isPhoneNumber("phoneNumber")).toBe(false);
  });
}

// Email
{
  test("Email 1: is 'cyl027@ucsd.edu' a email?",()=>{
    expect(isEmail("cyl027@ucsd.edu")).toBe(true);
  }
  );
  
  test("Email 2: is 'mypersonal@email.com' a email?",()=>{
    expect(isEmail("mypersonal@email.com")).toBe(true);
  }
  );
  
  test("Email 3: is '12-3@email.com' a email?",()=>{
    expect(isEmail("12-3@email.com")).toBe(false);
  });
  
  test("Email 4: is 'Iam@email.domcomromtom' a email?",()=>{
    expect(isEmail("Iam@email.domcomromtom")).toBe(false);

  });

}

// isStrongPw
{
  test("Password 1: is 'ABabAb' a strong pass word?",()=>{
    expect(isStrongPassword("ABabAb")).toBe(true);
  }
  );
  
  test("Password 2: is 'notastrongpw' a strong pass word?",()=>{
    expect(isStrongPassword("notastrongpw")).toBe(true);
  }
  );
  
  test("Password 3: is '!@#!*%&#@' a strong pass word?",()=>{
    expect(isStrongPassword("!@#!*%&#@")).toBe(false);
  });
  
  test("Password 4: is '12' a strong pass word?",()=>{
    expect(isStrongPassword("12")).toBe(false);

  });
}
//  isDate
{
  test("Date 1: is '1/1/1999' a Date?", ()=>{
    expect(isDate("1/1/1999")).toBe(true);
  });

  test("Date 2: is '09/02/2040' a Date?", ()=>{
    expect(isDate("09/02/2040")).toBe(true);
    
  });
  
  test("Date 3: is '000/1/1000' a Date?", ()=>{
    expect(isDate("000/1/1000")).toBe(false);
    
  });

  test("Date 4: is 'maaaain' a Date?", ()=>{
    expect(isDate("maaaain")).toBe(false);
    
  });
}

{
  test(" 1: is '#FFF' a HexColor?", ()=>{
    expect(isHexColor("#FFF")).toBe(true);
    
  });

  test(" 2: is '#A01234' a HexColor?", ()=>{
    expect(isHexColor("#A01234")).toBe(true);
    
  });
  
  test(" 3: is '0xFF0F0F' a HexColor?", ()=>{
    expect(isHexColor("0xFF0F0F")).toBe(false);
    
  });

  test(" 4: is '#Ppabcd' a HexColor?", ()=>{
    expect(isHexColor("#Ppabcd")).toBe(false);
    
  });

}