from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import time

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
names = driver.find_elements_by_css_selector('[data-anonymize=person-name]')
titles = driver.find_elements_by_css_selector('[data-anonymize=job-title]')
companies = driver.find_elements_by_css_selector('[data-anonymize=company-name]')
locations = driver.find_elements_by_css_selector('[data-anonymize=location]')
for name in names:
    print(name.text)
    name_list.append(name.text)
for title in titles:
    print(title.text)
    title_list.append(title.text)
for company in companies:
    print(company.text)
    company_list.append(company.text)
for location in locations:
    print(location.text)
    location_list.append(location.text)
print(name_list)
print(company_list)
print(title_list)
# print(f"the name list length is: {str(len(name_list))}")
# print(title_list)
# print(f"the title list length is {str(len(title_list))}")
# print(company_list)
# print(f"the company list lenght is: {str(len(company_list))}")




# driver.find_elements_by_css_selector("[aria-label=XXXX]")

# https://stackoverflow.com/questions/46669850/using-aria-label-to-locate-and-click-an-element-with-python3-and-selenium



