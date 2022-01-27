from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import time
import csv

driver = webdriver.Chrome('/Users/jacobmolyneux/Desktop/chromedriver')

username = 'jacobmolyneux2@gmail.com'
password = 'Jacob#1!'
print('starting scrape.....')
driver.get("https://www.linkedin.com/sales/lists/people/6891365935756709888?sortCriteria=CREATED_TIME&sortOrder=DESCENDING")
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

name_list = []
title_list = []
company_list = []
location_list = []

# for i in driver.find_elements(By.TAG_NAME, 'tr'):
def scrape_leads():
    names = driver.find_elements_by_css_selector('[data-anonymize=person-name]')
    titles = driver.find_elements_by_css_selector('[data-anonymize=job-title]')
    companies = driver.find_elements_by_css_selector('[data-anonymize=company-name]')
    locations = driver.find_elements_by_css_selector('[data-anonymize=location]')
    for i in range(len(names)):
        print(names[i].get_attribute('href'))

        
#     for i in range(len(names)):
#         leads.append({"Company": companies[i].text, "Name": names[i].text, "Title": titles[i].text,"Phone Number": '', "Location": locations[i].text, "LinkedIn": f"https://linkedin.com/{links[i]}"})
# print('scraping page number 1')
# scrape_leads()
# print('page 1 scraped')
# print(leads)

# time.sleep(3)

# next_button = driver.find_element_by_css_selector('[aria-label=Next]')
# next_button.click()
# time.sleep(1)
# print('scraping page 2')
# scrape_leads()
# print('scraped page number 2')


# print(leads)

# field_names = ['Company', 'Name', 'Title', "Phone Number", "Location", "LinkedIn"]
# with open('/Users/jacobmolyneux/Desktop/new_Leads.csv', 'w') as csvfile:
#     writer = csv.DictWriter(csvfile, fieldnames=field_names)
#     writer.writeheader()
#     writer.writerows(leads)

print('beginning scrape')
scrape_leads()

print('scrape over')



