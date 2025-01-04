"use client";
import Link from "next/link";
import { useState } from "react";
import Input from "@/app/_components/ui/Input";
import { Lock, Mail } from "lucide-react";

export default function PageLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Phần bên trái - Hình ảnh */}
        <div className="hidden md:block relative overflow-hidden">
          <div className="absolute inset-0 " />
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHEhUTEhMVFRIVFSAXFxgXGB8gHhcXGB0aGxgeGBseHighGhonIR0aJTEtJTUrLjAuGiAzOTMtOCotLisBCgoKDg0OGxAQGzIlICYvNS0wLy0tNS8rLS8tMDMtNTUuMCsvNS03LS8vLS0tLS4tLTUtLS01LTUtLzYvLy0tLf/AABEIAKIBNgMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABQYHBAIDCAH/xABOEAACAQMCBAMEBwIHCw0AAAABAgMABBESIQUGEzEiQVEHFDJhFSNCcYGR8FLBFjNigqGxsxckQ1Nyc3SStOHxNDVVY4OTlKOyw8TR0//EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EAC8RAAIBAgMECgIDAQAAAAAAAAABAgMREiExE0FRYQQiMnGBkaHB0fBCsVLh8SP/2gAMAwEAAhEDEQA/ANxpSlAKUpQClKUApSlAKUpQClKUApSlAKUpQCleuaZYBlmCj1Jx/XUBxLniy4ds86k+g701yBY6Vn8/tas4z4RI34Efur0x+1y3kO0MhwMnGTsO52XtU9nP+L8iOOPFGjUqh2vtWsZviLr96n9+KsXDearTif8AFzofx/QqLi46qx1NPQmqV+KwbcHIr9rh0UpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlQfNXM0PLcReQ+I/CvmT+v13wBK3t4lipeRgqjzP63rMeZ/a0sWUs11Htrbt+Hr+t6ql/PxD2gM7ojGJcgLkKpOM6QSRrfAzgdv6TPcE5Zt4Y4riNWkt5rfp3ayAFoxJlWljbA0tG6kMB2UZrVGjGOdTyXuUuo5ZR8ys3ScR5iia4eQmPpSTKNeOokJAlCKuSSpI2bHyqdt/Z1Dbzxq0rTLraKRQNGqUQdeMIwJPTYbZ75H5eHLvH/wCBIubO5OWhnUoNGrqIxCzKux0Bkw4yRud/OvSedHuIQLSNlnjljVThnLww6umWA8CPghW3OoZ7bVc8SyjkipYX2s2cHA+F217xWCNYZVtZh1EjnBBI6TMN+7x61OD5gYq18o2MTOZ/dBAbhbeMJqIXTMGMrxBH8KtpBAJyNNVmThnFeLzx3KwGN41VYjGoVY1TOkIozhdz3z3I7bVILwrjsTvKHk1yKFYjG4XIXA0YXGTjTjua5OcWrYlpxOxTX4+h2Tci25s1dEPVFs7fG3iklcC0zvj9oY8/Oqxzpy3Dy5o6UszSCRo26iadWgAl4iAPBqJXzOR3qQN1xfg4AeJig6OzID4bZw8QGnBxkYPmR8965LrmleJXlq93CY4bdmdo0yxZ2dpCcOc4L6Mj0B+6pU3K/auuTOTUbaWOheI8U5KY6yxRQhbJ1KOoDpDN5NsRvnt91X7lT2nQcXwk31Up/In5fr8BXrs75OaFjeMpK8aJI40llF3MOmjOu2UhAdiD6rggiq1xvk0cWR7s6YNRLalx0hFEh1zPhQcysMqFA2IbB3qlxhLtKz5fBYnKOjujZUcSAEEEHsR515Vi3LvMd7yWIxeqehIcBWbxpkZBI74I8/kQd9q1/hnEI+KRrJEwZGHcfvrNODg7MtjJSOqlKVEkKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSvCaUQKWY4VRkn5CgIrmnmCPl2BpZDv9lfU1ilhBJzzd67kyiNlkZNAGZGjAPShL4QyEHO/kvkMYlOI3A9oV8yNK0cMQYqFXPgQHW+e3h8O2CTqOMZzVqs1t+H2ml4FEYTqERTZimCDIntJGOBKMaiMo/c5bAJ1U1s1f8n6FEnjfL9lT4YX5LfRMHPD7o5jlwC0DjOiTTuEnXYkd8AealQuOaZuNztDZRu0RZnyjNEzSvGY2kOknRGSS+juTvnOa5Zp7j2gXHQiJFurltWkKX7KJJwvhaXSAM4GB5VpX0KnKNoqW2EkkkjhacgEoZXVNeDsWyQBnI1Fc5G1Sq1FHVdb0/05CLemhT+E8gWvCCvv8pknYahBEpdyM4J6aBmK5O5wR64q9WCvajFrw1YwOxnlSPI9R0xKw+4gVF8/8PbgXDZXsneKRXV5ZFb6yUE6GMkh8THcHOc4XHbauH2czxwShiIYmuogV13hmuJseJdSnAVdJc+oqlxlOOOTv9+6Fiai8KRYb3i89s6RST2EE0u0aNrkLEnAwNUZbJ28q/OJ3V5whOrcXthHGCAWa0lAyewz70cVnnNsE3M99evbwPL7uEijkR1HRaI62IBPjOoSDC77+uKn+d5puZuCxyCGTqa0aaMIQw06lchSM4zgj5HNS2K6ueupzaalqm4pcwOkeqxkkkXKRtM8TOPMquiQkfdUfxizhv1IvOHSAY3khCygHzwE+tJ/mVCcMvF5r43Dc26ye721sVLMhUCQ9QY38/rB/qmuTivAxPxv3ezlmttcTXFw8cjZ1sWPYnHcpt2wx+Vc2KvZuztfuO7TLxsRXFOQTGDc8LuOqqEghG8aHsy5BypxkEH55xXRy1zKboTC8EaSRsrl5SFR5lGLZZUG6RIVyNAK6iG8J+K/8W4T9H25uBNpu7eHLXJAHVEYLETqNnjO+x3XJKkHeoznPkhOZ4hMidK50hsfMjJVvnSNbdPNcd5x07ZxM9t7Sfn2SSeR3isonLHJeTQ0mC6QAjLszAeH7OpQB2B8uAccl9n97JbSOHiV9L4O2Dghh6bEZHkSfnn38o8clsJouH3ISPpu4jmbAaDWrE9PV4C7HwqzbrrPcHFWW/4c99bywW6wxBgepJn6uCPDGVZZzk3E77l8ZCkZJBAZtE2n1X2d3zf781RW9amj2d0t6iyIcqwyDXvrHPZHzQbOT3KYkA/BnyPpv+sfdWx1inBwlhZojJSV0KUpUSQpSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKz/wBsHH/oy2EKHDzbH5L+s/jitArCuaX/AIV8YWEsFjVtJZvhVVBdydxsVUfjVtGKlPPRZvwIVHaORIcjWvudukbaxLLJ10iYtBLqAKq9o7npz5QjKnAOo6jjArh5+vJLmb6PRYyXkSV2VSrNIVOOogJVJACSxX4tjt2q0cS41LbwSPPB9Xu4mh03FtN4Qqh42YtDGcLspAzgk7nML7GuCe+zSXbqMKTpAGAGJycDyGe3pprQ5WvUfh3/ANFOG9oI0TkvltOWrdUAzIRlz5k/r9dqjrziz83xz2trGY8ZjklnIVoXxsVhBMhdTgjWEHYgnznOYeOpwNFLAvI50xoO7EAsST2VFAJJPYepIBqHHbheI2AvLmKGO5hvBC0qE/Vol6IJCkpwwQoDk7dzsO1Yu80kuvGv4TWxgW3MskkRjuVL6I4JCCskbygE6wcjCBmGxOAQTHcD5WFlcSQr0rZ0jSSOS3hUuVcupHVn6pZlK74A2Zdt687yzs+Ju8sVrxCUO2X6LzQxu2BlgrSxK2dvEuQfU10cv8A91u0mhguLeJYnSQXFwZOprKFQidWTTgrknK+Qwc7dxO1jlkT30Hr+O4uW/wC1Kf2YWvz+D0f+Nuv/ABU3/wClS9K4dId+CMBiO7uo/mGR/wC1jeoXh1nNFd3M0K28roVhZ5EMckp0Ru2ZUyhCjQB4O6kZGKuVZ0nLK25k94tL6eVppHMsN0QrB3Z1KoLiPRsQMadsd27lcErxzircZCWcamK5kkBkjmHwwxfWMx0nDwuVWLUhI+tI7ggd/DuZutce6SwslyF1NoZZIwvqXUhkXyHUVCT2Bqp8wvacFs7whLuC4e1YI9y0zHIBKIk7O6KS2PCrAnbY1O8Qvxyo8ENraxCJ45JpETCMdDQJ9X9lpCZftYzj4hQET7WOUBxOI3MS/WoPEB9pf1+u9RnIXHH4tbMh3li0IzyLrVIyQsKwwJjUxK5JbA1AMSQAo06xu4+LwrJGdcUi5G2Mg9wQdwe4IO4OQawnmSyflTiLrHO9vHNsZUBJWJyC+ANzggHw4PkK0UXiWzfeimosLxLxHPUKWE0dxHNK100jiVZmQyBoiEDsI8BFbBAHoBjato5R4wOOWsco7lcN/lD1+f781lHFOSrLg0RkurycM6a48qqNKzDIxEdcvcgNqC48zUx7GOKqHnt1LdPOuPXjVjfAONs984qddJwUluOU21Kz3msUpSsheKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQHPxGb3eKR/2UJ/EDavlq9l96kdzvqct+ZJFfSnOUphsp2Hkn7xXzIuwrb0JZyfcZukPJI9wZoEOGYK/xAEgNpIPiA2O+O/pW1cPMvK/B4TBoFxJLEo17LmSVFbWcHCkasnuM7b1ks9n9TZk9pdYO3b65l7/PB/1a2zm11israApKxnZERoQC8UsaGdJApID6TFkjucYwc4rnTJXsu/4O9HWrKZ7Q+Y2ubmxeJdMg6kUkcmSYZUktZVyEyZAWERATPUUgD4quXJ1+JytmsP1MMOpmlZHkaUSldUiozKjF0lY5JOoHZSpBx5rh4+IQs6r04oH0zRMyqLcZwFbBeHSxeL4TKgYIAXVWOu+znELzxmB45enFIWdVTMbGZIkjhVmMMSdJsK515Zi25OcZoIr27uUtLbBIzdeR/wCqlrKOBcHuOOyCOLIzkB5CwTUEdwMgEkkI2MAjY1q3t6/5Jbf6V/7UtQXs436H+c/+PfVoUsNK64lTjeefAhP7nXEP2oP++ff/AMquOz5I4jeTSQiIq0WC7PJhMP8ABpYZL5GTsNvPB2rcYoyvw4+eWX5+oPqa9lltPP2+GH09G/D8qhtpfUS2cTHYvZhxF2ALQAE4z1nx/Z1S5FlgwHEi5AIJzghgGBB7bgg+uDX1FEhGM6fiGAD5bf0/dXz1zNvFb/5qH/ZoaspVG5pP9EKkEo3RuPIKCfhdmHAYNbIGDb5yoznPeqlzzxc3yzRvFpktpJVDI40tAY1WRZlB6kamOZDrUMqsI3JUbVb/AGd/82WX+jJ/6RVR5wmVbueQRyJokSN5QV0dTpRtHJq+KCVRKE1MrROvgkIBBXO9S44OWuaprXhDdEKb1veLhiSAkAMsviY7jUzhwibljn7IZh0+2ezF5b290Bjtn/JYbD8yPyqh8lW73iyW7xNHEZ5A0ca/WyyEaZkiQnwlYvq9TEJGssmSWdcajzxcrxzgizhNCvGkyr+yCupR/VUqbtNPmRmrxaMUu5XuT1JHZ3fuzEknG25O9WL2aXvuXEITnAfKH8d/6gah7y26Vtbv5u8vl2C9LH398/zqcuS9G6gYeUg/p2/fXp1VelLufoYoZTR9RUpSvJN4pSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAQfO667G4A84/3isK5Q5Xl426OYXNqCeo4IA8IJ0gkjOTgHHbJ7dx9Ccah94glX1Q/1ZrGeQuYjZD6OIOWklAfOy/VnA0+Z1BjvsMitPR5SUZYeXuU1Um1c8+frK5sUsutHFDEr6RHE2VVg2V20jB0kgnJyd8CtM49wxuK2cRiAaWLRNGpbSHIQqyavs60d1B8iwPlWQe0PmKfiE0ttKsaok2tQoORlTpOrUQcq2+Ns9q1CF/p3hCOgdmVUkCxsyuekwcojKQQzKCuxHxd65Xi1GLfMUmruxmvEr2NL6NjKI52BDtIgB6q6enNJHjadR4nQDxS2kRAw6Zu3J/FfdJ0RIXKXM3R1sdoEghkaOIsd5pyUkeQjIV5HUsWBFU7mm3eToX0brJpJEcz+Jum6sgeGYYMnTLaykw6sbRsclQSZ60uxbywLaxiVoy8sMSHYu0fTtowScJHFbMHkP7UyYyz4OcuO728rmztj6XQ/spqgPZ6oIgB7F9/u93v6t/tJVeYeDNPFuoSO6TP7AwzH7+mWqjcjXDwiEouQpLliH0ZVZ4yhaNWKueuCNjsh+VW3/525kLdfwNPt8NsBqOPLUPL8dq6bUaprjb7MO34NVaPME67CFT8zLMPyxaZrwg5u+skKRZMixBS0o0PpVj9U6B2lyAT4VOADq0naqiZdIe42A3GfXJ/dXz5zN/FW/8Amof9nhrXIeaJj3gjU+pkmI/AC0Gf6KyTma3d1hhCkSkrCgYFdZREgVgDuEdlyM+TCrKTtNMjUzizcvZ8unhll5f3tGfzUGqBxLjP0j/fEkZh68CylJCCh0qV1Fuz2s8TiJyd4z0mYDZhoXFLw8t20EcMRmkykEUYIBcIpZ8E7AiNHIztkCswuruO2tQUOtrdenEhBzIEZjbeE7qWiF1bSjGSylfsrUCR6eS2N2GWzYyXErkGQ7nQrMIuoe6RKMTydjJK6pudYF85/tE4TwcwJ8EcSxJn0VdK/jgVSuX+DPwy1itg7K046aiBjGskzDDOrK3VudAy7uWEQVdKK3lZPbRdi0s44F21OAB6Be39ANdgryS5kZO0WRPAeAT8X4dbpPHHJbtqYPr+shUjEZjGkYxjtk5zv6VRrfgtxwi7gjuIWjcuCAcbgHfSQSD+FXL2dcxz3+YWWPowRRqGAIYBHUgbthtQR84Gc/KuGy40ecuJ2Z0lREMHJznxNkg+mCvf0ra3OONPSzM6UXhNzpSlYDUKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQH4RmvnTmeFuW+JSFdirF0/nBhn88mvoysq9tnA9apdIN18L/d6/wBX4A1d0eWGeejyK6sbx7szPec+KxcZummhBClVByMZK7ZG5OMaRvvtWiexPjfUjktWO6nUn3Hv+/8AKq3wWwit0V7W0N1KUjk60+kwqWbE0TAlY4XGMAsXb0wCDUIkz8m35K6QY33VH16VbfQWwMsowD23WtdSKnDBHVaGeLcZYnvNG5o4QLua8jFusSMqtIYrkIZ0k2DmCWP3dn1ArqYhgQNxlTVZ5SvV4C6wzI6e6INayR6HZE9/uC2MnJYx2pJUspKDBO1afPBBzVBHcK7oyqSksR8aBgNa4wQ6nAyrBgcDbtWYcwcH+mlinsZWkWBtUbR8OmVXwdxqUhWQkb9JACc96842Fy5b4o1l0rOcIbYRpZFs7m5RAJTj/EszCLPk6gfa2yDmvl1+Vrl7ds6M6onP+EjPY582HZvmPQjNubj0N/OIRmKWS6TCOCro815ZzkFWAOdXX/mop21YrQOLnh/PYktHkAnidlA+GWN0YoWjDfEuR3GVPY1ZSqYHnoQnHEj56ryaQuqqcaU+HCIDsCBlgoZsAkeImrFzXyPd8sEmROpAO08YJXH8tdzF+Ph/lGq0GBxjfUcDHmT2A9TXoLZyV0ZXjjkftXz2S8u++3BvpvDbWmWDN2aQD1/ZQeI/ytPoa8uTvZhPxciS7DW9v30naWQfIf4IfNvF32Gxq98x8Us/cbzh9m6aorCY6Yt0jWNcMGceENlhkZzuSazV6sbYYl1KD1Zy3HHDxeWEzqqxCdZo18zbTpJZMsg+zIjzI7j7IlA8iao0kH8Jpo1KSuIHWaSRFjADS29oSHlmIiUGUSuQQ5J7Kc7dl/xteOG4itA8kkiyxho43kEaXE4aR2EYOPq4YSm43kOcaTUzyvwaPhwgtJbmWKYk9I+4ukjMd30SydVFbG5MYVsDJPnWQvLVyZZ9K4uC8CCRNKNP7w88jMRqMet0XQqgoSqeEFxjsazL2scbHFbwopykI0j7/P8AXzrS+beKw8kWXThGGIIjXJJLMSWZid2YkkkncnJrI+VrIzObuUGRVlEYQaS008p2QIylWUgtnJXvscitPRo543u/ZTWllhR5ctcwx8GtrhMN1pGUqQNtKlds52ODJ3GNx51YvYjwvrXDzEbRrpB+Z7/u/KqlzLYQWrnodWNtek2s8ZEkWckYbJV08hvq3Xv3rbvZtwT6EskDDxv42/H/AIn8MVd0mSUMvy9iuim5Z7i1UpSsBqFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBXJxWwXicTxOMq64rrpQGA2Sy8r3M9m85gDoyxysxwmxZdOToQswQFyMjG2M5r331rDxCBkLQw28QQW9zgKstwsarMinR1JY2kLM0h2GlT9+i+0blAcxw6kGJ0GVPqPT9fuFZTwJYuIXGjiTyF4k0IrYEUaRox8eGVig0jwpgtnOTk1upVMau9Vr8/fcyzjhdtx7vZ3zqeXJNEhJt3O4/YPrWqz8q2vGPr4CgDkuVMaSRs7YLNoYZRz3JQpqO7ZODWacV4anMJD4khuJC8NvCI1VIxbFB0pgFyshRmkLbKoBG+MCM5U5wuOVWwDrhP2e4IBIyh7EZB7bfMb1yrRx9aGu9HYVMOUtC885chWkKC8vbuSIW48JtwE3yCgQMXOrOMYx/8AXhP1I7Um4gguvfLxeiulbhowY9Vw7JGoQyBInk0xkjUxAJGBVw5c50teYF8LhX80bYj864eYLC34Hd298LfSi9QTyQxk4LJpjaVEGWUAuNWCVz5AmsWjszTe45M5ltbWztoJ7tEuEhRXSdwkgfTuCsmGJByPwqUh+jeHu06e5RyN8UgMak/e3eqxPxIcea5ngfUioUUJIJxIpKDqLGGZUZVDMF06yTv301zx8PMDQusGnVI2g+6JmRRcqq9ciHKZgOQTo2yTuNrMHMjiPbz/AMYh48sCWbJeskzM8MaGeN8Qy9MTBPDp6nTGWI06tXlUbzEY7yKKeVxa8LurOKMC3ZFlhRzrcFGTeJiyhunk4jG2NVTPAOYV5de4ivJxvJmJdWuRiWddMcSs7MNKxt4Qq5kICjBqW5G4LFwq2WWS3SGZy7MzgaxGXfpB2OSuIyvhzhe3lUJKzOp3I3gvs3i4VCI4JlkhJ1fXRiTOrfIwyp2/kmu6aCz5Ejadzql0lVZgoOCc6I0RVSNScZ0gaiBnUd65ea/aTb8GBSE9Wbtgdgfmf1+NZPNPdc5zhpGJBJ3wSq6RqYIPtyBASFHiIGwxVtKjKebyXH4ITqKOS1Pzi3EJ+dLrO2WOEVmCqv7ILE4DMQAM9yQKtPAbyIKIlMdq8aBJ0kCo6Mg8bSq/gu4WIJIOJU1HSdxXfZ8I+gbQ6HQxNpklkQ9SNgylVklj7vayLsy4zGfEpIyRXruWTmic2VqVeEsmqXBZyqgEI0rANJEjl9BYAkAEkgZrVeLVlkkU2ad3qzq5J4fJzreJPMipDAioFQEKAnwqNRJ2ye57keQwNxUadh2FRfLXA4+X4FhjHYbn1NStYqk8crmiEcKsKUpUCQpSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQCqH7QeQV48DNBhLgen2v9//AB9c3yldTcXdHGk1ZmBwceeN2g4kJdRJVioRWeNmXXECAioJG8UkhOpggUkdx+8SC8w3r58dpZRiJRENIkYHRGkQGy9SU4Xv4R32zWuc0cpW/Ma4kXD+TjuDWV3/ACvxDksyNbYeN8eIIrFSurQwyNnXU2CMHxHatdOtF65P0/oolTa5r1IjiPJk1joaF+pkPhh4TmExxyFTncGV9K+bYHrXnac5cR5cOh3YY+zKvlnG3kRsd984qRtOd0ijEbRmLouZI4yMgdKGNbaLOM/xqCRiQBlB61McOvFIWOFnmaPh6yTPAglfqCNYIkC5w7IZJpCDtlhntVsrtdeNyCS/F2ICfniDiR1XXDbWVz3copY/zsA16zzJw7/oqI/JskfkXxU1Pb2q29rLcxLKZWRmMduFky5mlLSdPGpDGEGhc/A2K9NnwyGORQ9rbM0k8ibBmQr7nDPE0YYgqCx1YPbWw9DVezpcH5k8VTicMXtE+jgRZ2VtbZ840Ufngb/nUZe8Y4jzGsjlpWjjXU+nwqgxnck9yOwzv5CvLjN1ELWyuIoI0eSV5JQFAXXAIU0qPJG3fT2zIatfMPEY41kMrRSiZJmh6x1hwjCe1OFbIAE00Q1Y3UDcCrFThG1o+eehBylK92V3hfKUciqTKs8s0LvCiPojJjYLIHmYfEgJcgAfD3wamouINARdJ0fo4IqsERP73nRggMfh+sljc9RC3xRk96p/A+KTQIIoUZ5EnWeFh/g3AKuCMbo40gg4Hhq68F9nVxx+QT3xWNcABEULhR8KqqgBQPl+ZpVkovrv58vcQV11UQUfvHOMghtl0xhiWdRgBnGJtHYpFIfGYySAx3rYeUOVYuWYgqDMh+N/Mn9frsKkuEcIi4PGI4UCqPzP313ViqVXPLRcDRCGHPeKUpVZMUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFfhGa/aUBAcZ5OtOMfxkK59V2I+70qnX3shQHVb3Dxkds+X47mtQpUozlHsuxFxT1Rjn9zbiNkQYro+EqVwxGCgKpjLeQLAfIkdjXrPIXFXfWZ/H1DJq1jPUKhC3fvpAX7gK2elT29Tj6L4I7KPD1ZjFr7JLmRQslwqopJC74BOMkDJAJwM7eQ9Kn+F+yG2t95XeQ+nYf0d/wARWkUo61R6y9v0dVOC3EZwrgNvwgAQxKuPPG/+78Kk6UqomKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQH/2Q==')",
            }}
          />
        </div>

        {/* Phần bên phải - Form đăng nhập */}
        <div className="flex flex-col justify-center px-8 py-12 space-y-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-4xl font-bold text-blue-800 mb-6 tracking-tight">
              Đăng Nhập
            </h2>
            <p className="text-center text-gray-500 mb-8">
              Chào mừng bạn quay trở lại! Vui lòng nhập thông tin.
            </p>
          </div>

          <form className="space-y-6">
            <Input
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e)}
              icon={<Mail className="text-gray-400" />}
              label="Email"
            />
            <Input
              placeholder="Nhập mật khẩu"
              value={password}
              label="Mật khẩu"
              onChange={(e) => setPassword(e)}
              type="password"
              icon={<Lock className="text-gray-400" />}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-lg"
              >
                Đăng Nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
