import time
from datetime import datetime as dt
hosts_path = r"/etc/hosts"
hosts_temp = "hosts"
redirect = "127.0.0.1"
web_sites_list = ["www.instagram.com","www.facebook.com"]
#you can add sites you want to block for this computer
#for use during studying or tests to not distract
while True:
    if dt(dt.now().year, dt.now().month, dt.now().day, 9) < dt.now() < dt(dt.now().year, dt.now().month, dt.now().day, 22):
        print("working hours")
        with open(hosts_path,"r+")as file:
            content = file.read()
            for website in web_sites_list:
                if website in content:
                    pass
                else:
                    file.write(redirect+" "+website+"\n")
                else:
                print("time for fun")
                with open(hosts_path,"r+")as file:
                    content=file.readlines()
                    file.seek(0)
                    for line in content:
                        if not any(website in line for website in web_sites_list):
                            file.write(line)
                        file.truncate()
                        time.sleep(5)
                        