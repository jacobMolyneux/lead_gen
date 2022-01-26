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
driver.switch_to.default_content()
table_rows = driver.find_elements(By.TAG_NAME, 'tr')

print(len(table_rows))
# for row in table_rows:
#     name = driver.find_element_by_css_selector('[data-anonymize=person-name]')
#     title = driver.find_element_by_css_selector('[data-anonymize=job-title]')
#     company = driver.find_element_by_css_selector('[data-anonymize=company-name]')
#     print(f"{name.text} is the {title.text} at the company {company.text}")

# driver.find_elements_by_css_selector("[aria-label=XXXX]")

# https://stackoverflow.com/questions/46669850/using-aria-label-to-locate-and-click-an-element-with-python3-and-selenium

