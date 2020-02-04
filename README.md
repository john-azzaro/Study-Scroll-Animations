# Scroll Animations Study
See it Live:  https://john-azzaro.github.io/Study-Scroll-Animations/

<br>

## What is Scroll Animations Study?
"Scroll Animations Study" is an exploration of interactive animations on events such as scroll.  This adds a nice touch to websites by revealing
text and images.

<br>

## What are the key takeaways from the Scroll Animations Study?

<dl>
<dd> 

### Using DOM para.getBoundingClientRect.
-----
For this particular implementation of scroll effects (i.e. without a library), I need to make use of ```para.getBoundingClientRect``` which returns the size of an element and is position relative to its viewport. In the case of this study, I needed it to get the distance of where this element is relative to the window by getting "para" and the method .getBoundingClientRect(angle), then access the top property.
```JavaScript
   let paraPosition =  para.getBoundingClientRect().top;
```

<br>

### Using DOM window.innerHeight.
-----
This was interesting to use as it was used to make sure the transition works for different screen sizes. In particular, the transition was set for 1.3 the screen height of the viewport.
```JavaScript
  let screenHeight = window.innerHeight / 1.3;
```


</dd>
</dl>

<br>

## Does Scroll Animations Study feature commentary?
Yes! The Scroll Animations Study features commentary. which are in all files as well as the processNotes.txt which gives you a better idea of the step-by-step
reasoning.  

<br>

## What are the key features of the Scroll Animations Study?
Since this study is ongoing, basic functionalities are covered first and more advanced features are added or will be added in the future.  I divided this particular study into different branches covering different aspects of basic node servers, which i list below:


| **Features:**                            | **Feature Notes:**                             |
| ---------------------------------------- | ----------------------------------------------|
|  on scroll, reveal text                  |  reveals text at a specified height                                              |

<br>

## Screenshots

![scrollrev1](https://user-images.githubusercontent.com/37447586/63073715-ebd2f900-bede-11e9-810f-8f762c1edeb9.png)
![scrollrev2](https://user-images.githubusercontent.com/37447586/63073716-ec6b8f80-bede-11e9-9543-f65cc98d53f7.png)
![scrollrev3](https://user-images.githubusercontent.com/37447586/63073719-ec6b8f80-bede-11e9-93ba-267f65c609d0.png)
