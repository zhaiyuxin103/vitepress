# Xiao Ming and His Phone

Once upon a time there was someone named Xiao Ming.

Xiao Ming has three big hobbies: uh... smoke, drink—oops, wrong story. His real hobbies are scrolling Zhihu, grinding at Honor of Kings, and snatching WeChat red packets.

![file](/images/依赖注入如何实现解耦/v2-709d32cb3e9cdd2ead92e40c998ce077_720w.jpg)

Let’s build a pseudo-code version of Xiao Ming:

```php
class Ming extends Person
{
    private $name;
    private $age;

    function read()
    {
        // Scroll Zhihu
    }

    function play()
    {
        // Play Honor of Kings
    }

    function grab()
    {
        // Snatch red packets
    }
}
```

But as a mortal, Xiao Ming can’t accomplish any of that without a phone. He buys an iPhone 6. Let’s create it:

```php
class iPhone6 extends Iphone
{
    function read($user = 'someone')
    {
        echo $user . " opened Zhihu and made up a story \n";
    }

    function play($user = 'someone')
    {
        echo $user . " launched Honor of Kings and fed the enemy team \n";
    }

    function grab($user = 'someone')
    {
        echo $user . " started snatching red packets but never sends any \n";
    }
}
```

Xiao Ming treasures his new phone and grips it tightly, so he ends up like this:

```php
class Ming extends Person
{
    private $name;

    private $age;

    public function __construct()
    {
        $this->name = 'Xiao Ming';
        $this->age = 24;
    }

    function read()
    {
      // Scroll Zhihu
      (new iPhone6())->read($this->name);
    }

    function play()
    {
      // Play Honor of Kings
      (new iPhone6())->play($this->name)
    }

    function grab()
    {
      // Snatch red packets
      (new iPhone6())->grab($this->name)
    }
}
```

It’s Saturday. Xiao Ming doesn’t need to work, so he gets up and one by one scrolls Zhihu, plays Honor of Kings, and grabs red packets:

```php
// Xiao Ming gets up
$ming = new Ming();
$ming->read();
$ming->play();
$ming->grab();
```

The console outputs:

```text
Xiao Ming opened Zhihu and made up a story
Xiao Ming launched Honor of Kings and fed the enemy team
Xiao Ming started snatching red packets but never sends any
```

Life is good. Xiao Ming feels like the happiest person alive.

## Xiao Ming’s Joys and Sorrows

The phone accompanies Xiao Ming through many happy times. Whenever he’s free, he clutches it: Zhihu, Weibo, games. He thinks he doesn’t need a girlfriend—as long as he has his phone.

But frequent system updates shatter the dream. The phone gets sluggish, the battery degrades, and one chilly day it gives up and shuts down.

Xiao Ming is devastated—time for a new phone.

He splurges on an iPhone X: loud ringtone, massive battery, dual SIM. Love at first sight. But a problem appears—his old code tightly depends on `iPhone6`. To use the new phone he must painstakingly replace every `iPhone6` with `iPhoneX`.

![file](/images/依赖注入如何实现解耦/v2-e124d9d71c8400e1aab90f652f8d6bcf_720w.jpg)

After a long refactor he finally swaps them all. Exhausting, but he’s happy—until a pickpocket steals the phone. In a panic he falls back to the abandoned iPhone 6. The thought of redoing the refactor makes him miserable. Why is he so **dependent** on the phone? Why must he keep refactoring himself whenever the phone changes? This isn’t just high **coupling**—it’s upside down. He screams to the sky: “I don’t want to **control** my phone anymore!”

The Creator—aka me, his programmer—hears him. I say, “You don’t have to control your phone. Give the control to me. That’s called **Inversion of Control**.”

## The Creator’s Wisdom

Hearing this, Xiao Ming is excited yet nervous. He kneels and says, “So you’re the legendary creator, the mighty Lord Bagmek! You mentioned **Inversion of Control**, meaning the phone’s control moves from my hands to yours. But that’s just a concept. How do we implement IoC so I can still use a phone?”

“Heh.” I sneer, toss four words, “Dependency Injection!”

Then I perform a merciless refactor:

```php
class Ming extends Person
{
    private $name;

    private $age;

    private $phone; // treat the phone as a member variable

    public function  __construct($phone)
    {
        $this->name = 'Xiao Ming';
        $this->age = 24;
        $this->phone = $phone;
        echo "Xiao Ming woke up \n";
    }

    function read()
    {
        // Scroll Zhihu
        $this->_phone->read($this->_name);
    }

    function  play()
    {
        // Play Honor of Kings
        $this->_phone->play($this->_name);
    }

    function  grab()
    {
        // Snatch red packets
        $this->_phone->grab($this->_name);
    }
}
```

Simulate Xiao Ming’s day:

```php
// Create an iPhone X
$phone = new IphoneX();
// If the iPhone X is broken, fall back to iPhone 6
if($phone->isBroken()){
    $phone = new Iphone6();
}
// Xiao Ming doesn’t care which phone; he just uses it
$ming = new Ming($phone);
$ming->read();
$ming->play();
$ming->grab();
```

We first check whether the iPhone X works. If not, swap to the iPhone 6. Then we wake Xiao Ming and hand him the phone—injecting the dependency directly. He doesn’t need to care which phone it is; he simply uses it. That’s **dependency injection**.

## Xiao Ming’s Reflection

Life grows simpler. Xiao Ming now spends the saved time writing in his notebook:

::: info
I used to be possessive, overly dependent on my phone. The coupling was too high—whenever the phone had issues, I had to refactor myself. That was time-consuming and error-prone. After handing control to the Creator, every morning before I wake he has already picked a phone for me. I just use it as usual without caring which one it is. Even if a phone dies, the Creator solves it—no need to change myself. I even bought seven phones and gave them all to him so I can switch daily. Bliss!

**My takeaway**: If class A needs class B to function, then B is a **dependency** of A. If A instantiates B internally, the two become tightly **coupled**. If B changes, A must change. With many such dependencies, pulling one thread moves the whole sweater—the **program becomes hard to maintain**. To fix this, we extract the control of B out of A and hand it to a third party—this is **Inversion of Control (IoC)**. IoC is a concept; **Dependency Injection (DI)** is its quintessential implementation. Let a third party (the **IoC container**) manage dependencies and inject them into A via the constructor, properties, or factories, dramatically reducing coupling between A and B.
:::

## Xiao Ming’s Mystery

One day Xiao Ming is reading Zhihu and sees the following sentence.

To be continued…

::: tip
Article republished from: [What's the simplest way to explain dependency injection? How does it achieve decoupling?](https://www.zhihu.com/question/32108444)
:::
