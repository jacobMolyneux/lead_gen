from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

import time
import csv

driver = webdriver.Chrome('/Users/jacobmolyneux/Desktop/chromedriver')

username = 'jacobmolyneux2@gmail.com'
password = 'Jacob#1!'
print('starting scrape.....')
driver.get("https://www.linkedin.com/sales/lists/people/6892620939540918272?sortCriteria=CREATED_TIME&sortOrder=DESCENDING")
print('waiting for page to load')
time.sleep(6)
    # Store iframe web element
iframe = driver.find_element(By.TAG_NAME, "iframe")

    # switch to selected iframe
driver.switch_to.frame(iframe)

print('wait is over')

print('finding username and password logins')

username_input = driver.find_element(By.ID, 'username')
password_input = driver.find_element(By.ID, 'password')
print('found logins')
print('sending login info')
username_input.send_keys(username)
time.sleep(1)
password_input.send_keys(password)
time.sleep(0.3)
print('login info sent')
login_button = driver.find_element(By.TAG_NAME, 'button')
login_button.click()

print('-----------------')
print('')
print('WOOP! Login successful!')
print('')
print('----------------')
print('')
print('waiting for page to load')
time.sleep(4)
leads = []
driver.switch_to.default_content()

# for i in driver.find_elements(By.TAG_NAME, 'tr'):
def scrape_leads():
    table = driver.find_element(By.TAG_NAME, 'tbody')
    table_rows = table.find_elements(By.TAG_NAME, 'tr')
    
    print(len(table_rows))
    for row in table_rows:
        name = row.find_element(By.CSS_SELECTOR, '[data-anonymize=person-name]').text
        #try to get the company
        try:
            company = row.find_element(By.CSS_SELECTOR,'[data-anonymize=company-name]').text
        except NoSuchElementException:
            company = 'N/A'
            pass
        #try to get the job title
        try:
            title = row.find_element(By.CSS_SELECTOR,'[data-anonymize=job-title]' ).text
        except NoSuchElementException:
            title = 'N/A'
            pass
        # try to get the location
        try:
            location = row.find_element(By.CSS_SELECTOR, '[data-anonymize=location]').text
        except NoSuchElementException:
            title = 'N/A'
            pass
        try:
            linkedIn = row.find_element(By.CSS_SELECTOR, '[data-anonymize=person-name]' ).get_attribute('href')
        except NoSuchElementException:
            linkedIn = "N/A"
            pass
        leads.append({"Company": company, "Name": name, "Title": title, "Phone Number": '', "Location": location, "LinkedIn": linkedIn})

    
next_button = driver.find_element_by_css_selector('[aria-label=Next]')
while next_button.is_enabled():
    print('scraping page')
    scrape_leads()
    next_button = driver.find_element_by_css_selector('[aria-label=Next]')
    next_button.click()
    time.sleep(3)

# runs last time to scrape the last page
scrape_leads()




# create a csv file and save it to computer
field_names = ['Company', 'Name', 'Title', "Phone Number", "Location", "LinkedIn"]
with open('/Users/jacobmolyneux/Desktop/pst_cpg_Leads.csv', 'w') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=field_names)
    writer.writeheader()
    writer.writerows(leads)
