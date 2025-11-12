import React, { useState } from 'react';

// Component to auto-detect image format
const DiaryImage = ({ id, title }) => {
  const [currentFormat, setCurrentFormat] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const formats = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

  const handleError = () => {
    if (currentFormat < formats.length - 1) {
      setCurrentFormat(currentFormat + 1);
    }
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  if (currentFormat >= formats.length && !imageLoaded) {
    return null; // No image found
  }

  return (
    <div style={{
      width: '75%',
      marginBottom: '40px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      display: imageLoaded ? 'block' : 'none',
      margin: '0 auto 40px auto'
    }}>
      <img
        src={`/images/diary/day${id}.${formats[currentFormat]}`}
        alt={title}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'cover'
        }}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
};

const Internship = () => {
  const [selectedDiary, setSelectedDiary] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top when diary changes
  const handleDiaryChange = (diaryId) => {
    setSelectedDiary(diaryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainSections = [
    { id: 'home', name: 'Home', link: '/' },
    { id: 'about', name: 'About Me', link: '/' },
    { id: 'projects', name: 'Projects', link: '/projects' },
    { id: 'internship', name: 'Internship', link: '/internship' },
    { id: 'music', name: 'Music', link: '/music' },
    { id: 'contact', name: 'Contact', link: '/contact' }
  ];

  const diaryEntries = [
    {
      id: 1,
      date: '2025-07-08',
      title: 'Day 1',
      content: 'It was my first time working in a proper lab. My supervisor is Professor Li Qinghua. When I first arrived, he said things like, "You see this (medical imaging software), you get it, right? I want to hear your thoughts." I was obviously intimidated - all the stuff I prepared over the past few days, I couldn\'t get a single word out. So he probably didn\'t have much confidence in me either, saying, "If you just want to go through the motions, I can just sign off for you directly." Hearing that didn\'t make me happy at all - I genuinely wanted to learn more and gain something meaningful. He then gave me a book about DNA to read, and I thought I\'d be stuck reading it all day. Just when I had no clue what to do, my teammate Li Hongfei rushed in and explained their first project to me (since I was originally assigned to the second project doing data processing and analysis). After listening, I was totally hooked because he explained it really clearly, gave me specific tasks, and the content wasn\'t just medical stuff anymore - it leaned more toward my original direction (hardware and software design, AI empowerment, that kind of thing). So I dove into this project pretty quickly. I initially used Doubao to help me write a 5x5 path planning simulation in MATLAB, which got the idea across, but the professor said we needed to do it in C#. That\'s been a huge challenge for me because I\'ve never successfully set up a development environment in software like Visual Studio, let alone run programs - every time there\'s a pile of errors. Around 5 PM, near the end of the workday, Senior Hongfei patiently showed me how to build a form using C#. When I got home and tried it myself - even though it was just changing a button from the default text to pop up "OK" when clicked - I was super happy. I did it using my own brain instead of AI! Every day, a little bit of progress. If I keep this up for a month, I\'ll definitely be at the next level. I don\'t want to use too much space in this diary to detail the project itself - I\'ll eventually produce an essay or some written output for that. Of course, besides the internship, I also have to study for IELTS now, so my days won\'t be so leisurely anymore. But being tougher on myself will help me improve faster. Time to go study IELTS now!',
      tags: ['First Day', 'C# Development', 'Path Planning', 'IELTS'],
      mood: 'excited',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 2,
      date: '2025-07-10',
      title: 'Day 2&3',
      content: 'It\'s actually Day 3 of my internship now - I totally forgot about this diary yesterday for various reasons, but I\'ll gradually form the habit. Yesterday I finally fully understood our workflow and the specific operation process, so I tried to create a demo using real-time design. The next day, which is this morning, Senior Hongfei said we don\'t need a menu - just like the toolbar at the top of VS, then put the three views (real-time camera, focal plane, path planning) on one interface. This would indeed be more intuitive. So I spent the whole day working on the latest version of the demo. Before leaving, Hongfei took a look and said the general framework is there, but the specifics still depend on what Professor Li thinks. I should have asked today, but Hongfei wasn\'t around, so tomorrow I definitely need to understand it. But even if I know tomorrow, I won\'t work on the demo anymore. I found a tutorial on Bilibili about WinForms, and I want to spend tomorrow plus the next day finishing this 6-hour tutorial. Should I take notes? Maybe, depends on time - haven\'t figured out the format yet. I feel like I need to master this within the next two days, because on Sunday I need to practice hands-on, in other words, make demos directly in Visual Studio.\n\nI feel like my diary is still using large chunks to summarize what I did today and what I\'m going to do next. It seems like the part about insights and reflections isn\'t that good - I guess that has to come naturally hahaha, I\'ll try my best.\n\nTwo new students joined our team today, transferred from another group. I taught them about classes and objects, inheritance and polymorphism, WinForms, how to read libraries (extract useful functions), and explained our operation process, giving them a new understanding. At lunch, the four of us (my good friend hadn\'t arrived yet, she came in the afternoon) were chatting and laughing - the atmosphere was really good, but sometimes I just don\'t know what to say, or what I say isn\'t that likable (maybe I\'m overthinking). I realized my language expression ability really needs improvement. When explaining things to the new students, I always felt like they didn\'t understand, or only half-understood. I actually realized I wasn\'t explaining clearly enough, but I don\'t know how to optimize it. Though as a 17-year-old high school student, being able to explain knowledge I learned and forgot two months ago is pretty exhausting.\n\nI ate dinner with my good friend Yixin, we really clicked, and she\'s such a genuinely good person - you can tell from so many details. People in Jinan, Shandong are all pretty nice - at least I haven\'t met anyone bad so far. After dinner, we took a walk around the stadium, playground, and fields, then she went back to the dorm.\n\nI gotta say, I really need to learn from Senior Hongfei for a lifetime, not kidding. He\'s just so organized - I saw he lists out what to do every day and executes them one by one. Not to mention his language skills - he\'s done WinForms projects, and he\'s really good at C#. Today a few of us asked how he got to this level when he\'s only a sophomore. He said what you should learn from me is the learning method, not just me feeding you what to do. It\'s not learning for the sake of learning, but for a goal (intrinsic motivation). This goal is like, for example, you make a smart home system, which gives you a great sense of achievement. To gain completion, you\'ll have intrinsic motivation, then you think about what you need to do to achieve this goal. My understanding is that the learning process is reverse-engineered: goal → skills needed → how to master them → learning. Hongfei also has this trait where his thinking is very divergent and imaginative. He can always think of things others can\'t. I feel like all geniuses have this characteristic. If we only stay focused on what we\'re doing now, we\'ll miss many details in the complete process, or we won\'t even think about what we need to do - that\'s scary. You\'re not progressing, but time keeps flowing. There\'s so much more to learn from him - his way of speaking, logical connections. There are many more brilliant qualities to explore in excellent people. Time to review IELTS now, that\'s all for today.',
      tags: ['Team Learning', 'WinForms', 'Mentorship', 'Communication'],
      mood: 'inspired',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 3,
      date: '2025-07-11',
      title: 'Day 4',
      content: 'Even though it\'s Friday, our whole team is still working intensively. This morning Hongfei went to Professor Li to further confirm the operation process and corrected some errors in my previous assumptions. It\'s not about implementing manual control on sampling positioning - after all, we need to collect focal planes for hundreds of points - but rather manual control in path planning. For example, with spiral sampling, users can randomly select a few points on the image. What does this involve? Say the point I select might not be within the cell range, making it a useless collection, so I can manually switch to another point for collection. So manual control in path planning is really necessary.\n\nAt noon, our hardware equipment - the microscope - became available! Hongfei wanted us to first get familiar with manually operating the microscope, because only by knowing the principles will we know which functions to use to control the microscope. Several of us studied it in the afternoon. Honestly, it was a bit difficult at first. Difficulty one: finding the target cell, which involves adjusting the coarse and fine focus knobs, but the target cell appears in the field of view only for an instant, so you need to be highly concentrated. After debris appears, the target cell shows up instantly. Difficulty two: finding the aperture, which means finding an obviously bright field of view in a dark field, clearly distinguishing the two. This is quite hard to find. I discovered a trick: when adjusting the condenser, first turn it to the darkest, then gradually brighten it - during this process, areas with distinct dark and bright regions will appear. After the team members explained it to me, I wrote down the operation steps in a Word document, which isn\'t convenient to show here. I think we\'re using an Olympus BX43 microscope. I remember the last time I used a microscope was in middle school - the difference is huge, but it also helped me recall the microscope usage process. It\'s also equipped with complex software that I haven\'t looked at yet. Don\'t know if we\'ll need it, but I definitely need to understand what configurable parameters the built-in camera has, so I can design the software framework accordingly.\n\nToday, besides learning the microscope usage process, I spent the rest of the time learning WinForms. What benefited me most is knowing the code framework behind it - this is very important. It extends to a concept called "class splitting." Both Form1.Designer.cs and Form1.cs create the Form1 class, jointly constituting the definition of the Form1 class. This is something I didn\'t learn in my APCSA course. I also learned about automatically and manually creating controls, automatically and manually creating events, manual layout, etc. Although the efficiency isn\'t high, I learned a lot and took notes on everything.\n\nI still need to shower. There\'s been so much to do lately. I was also thinking about whether I could create a personal website - I think this would be such a meaningful thing, and it could help people get to know me quickly hahaha. It\'s already 10 PM, didn\'t look at IELTS at all today, but still need to shower and do laundry. Keep going!',
      tags: ['Microscope', 'WinForms', 'Hands-on Learning', 'Personal Website'],
      mood: 'accomplished',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 4,
      date: '2025-07-14',
      title: 'Day 5',
      content: 'Today is Monday. Over the weekend I learned how to build frameworks using WinForms as I had planned, use C# to make some interactive buttons, and some custom UserControl class pop-ups, etc. At first I thought WinForms would be really hard because I had previously learned Java and Python and had never heard of C#. Through the 6-hour course, the most crucial thing I learned is class splitting - form1.cs and form1.designer.cs jointly define the form1 class. When I was learning Java in APCSA, I only worked in client classes and never encountered this concept. I found that I get a great sense of achievement when I finish making my own forms. So today, I actually got hands-on creating our team\'s EVE form. My efficiency wasn\'t high in the morning - I put a menu bar at the top of the form, below that is a toolbar, and when users click on parameters in the menu bar, a popup appears where they can set camera and microscope parameters. After lunch, I worked on a Xiaohongshu video first. I haven\'t updated in so long, afraid I\'ll lose my fans, so I feel like being an influencer - I mean the independent kind who edits their own videos - is really tiring. Just organizing materials takes forever, and editing is even more exhausting, especially having to keep staring at the screen. At 3 PM I continued working, and this is when it all clicked. Earlier Hongfei required that when users click on the toolbar, like surface fitting, a new MDI window pops up. At this point, you can actually operate both the newly opened window and the initial window simultaneously. This is different from modal windows - modal windows block other windows, so users can only operate the popped-up window. Before leaving, I finally showed my team leader the form I completed last night. He was quite satisfied, but this also means I\'ll get new tasks.\n\nI\'ve discovered I have a "superpower" for rapidly learning new things. Hongfei and Professor Li often praise my strong learning ability. At first I couldn\'t really get this point - I felt I was still much slower than them. But after this internship started, I discovered my "superpower" in many ways. I think this mainly comes from my very organized learning method. I first take what I need to learn, like "WinForms," and I search for keywords on the web, on Bilibili, then watch videos with high view counts. Next, I break down the video I want to watch, because you can\'t swallow a whole pancake in one bite, right? So I set a schedule for which episodes to finish in what time period. I usually spend continuous 2-3 hours watching videos plus practicing - this feeling is great, flowing smoothly. Then, the most important part: taking notes. There are many ways to take notes - you can download note-taking software on your computer, or use a notebook. Personally, I especially like using a dedicated notebook. For this internship, I have a special internship notebook with lots of wild UI designs, task plans, notes, project code, etc. A physical, visualizable thick notebook usually gives me more sense of achievement. That said, notes aren\'t about the format, but whether you really absorbed it and reviewed it. If you don\'t take notes, learning code and writing WinForms - things that require practice - you basically can\'t remember. Videos are hard to search through. If you take notes, it\'s clear at a glance. When you don\'t know something, you immediately correspond back. If you don\'t understand the notes, then go back to the video. Although taking notes takes time, it\'s much more time-saving than forgetting after learning and having to watch videos again.\n\nOur two new freshman girls still have a bit of a gap in ability compared to me - I even taught them concepts like classes and objects, inheritance and polymorphism. But they\'re very willing to learn and have a sense of time. When Hongfei assigns tasks, they focus fully on them. Today their task was to analyze code - what each function does - zmotion (microscope platform) and camera code, and these codes can\'t have errors in Visual Studio, if there are errors they need to fix them. They use AI to help them "translate" code, and AI helps them with errors too. But they might not know that Visual Studio is full of project files, meaning an error in one file might not be the file\'s fault - it could be a reference error, initial configuration error, or control design or naming issues. In other words, AI can\'t help you solve errors, and usually after AI fixes things, there are even more errors. AI can indeed provide me with many ideas, and if it\'s analyzing functions it does very well. But searching on the web yourself is more interesting - many times blogs on CSDN have many experts sharing text tutorials, clear and concise, helping you understand details at a deeper level. We\'re here to learn, not to let AI learn hahaha. We should know which weaknesses we need to make up for through this internship, which strengths are necessary to show, because this way we can gain favor from more people in the team. Having weaknesses is fine, no need to fake it. What\'s more important is how you use resources around you to make up for your shortcomings in a short time. This growth process is what leaders most want to see. I did it - in just three days from not knowing to knowing and producing results through practice.',
      tags: ['Learning Method', 'WinForms', 'Note-taking', 'Self-reflection'],
      mood: 'accomplished',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 5,
      date: '2025-07-15',
      title: 'Day 6',
      content: 'Today was really exhausting. I just finished organizing my Day 5 diary because I recorded it in English voice memos - spoke for 20 minutes, then listened for another 20 minutes to organize it all. Today I did a lot, but also not that much. We had a meeting in the morning. Before the meeting there was a little incident. Hongfei was going to use my framework for demonstration, but I was modifying the namespace at the time. After modifying it, it wouldn\'t run anymore. Just when I thought the framework I spent a whole day making was going to be wasted, Hongfei used his magic touch to save the entire project. When he reported, he focused on the framework I made. The moment I was praised felt happy and proud, but I still wanted to maintain a learning attitude towards everyone, so I didn\'t seem that happy hahaha. After the three groups finished their meeting, our group had a separate small meeting about what we need to do next. Moving forward it\'s mainly code and hardware equipment issues (though it seems like it\'s always been these two issues, but now it\'s more clear hahaha). There are two hidden issues: one is coordinate system establishment, the other is image storage. In my eyes both are very important, indispensable. Coordinate system establishment relates to all our core code writing later, including automatic sampling, surface fitting, and path planning. Path planning is further divided into automatic and manual. Hongfei assigned me to lead one of the two new girls to write the focusing algorithm. In the afternoon we started this new journey.\n\nI\'m very unfamiliar with the hill climbing algorithm in the focusing algorithm, so I spent a lot of time collecting materials about hill climbing algorithms, including how it\'s applied to the coarse and fine focus knobs of microscopes. After understanding it, I feel it\'s not as difficult as I imagined. Simply put, hill climbing algorithm starts from a starting point - I\'ll use the microscope as an example directly. This starting point is the middle value of the coarse and fine focus knobs. Then I first only move the coarse focus knob, take a photo at the starting point and get a clarity score, adjust upward by 0.5mm to get a new clarity score. If it\'s lower, then turn the knob in the opposite direction. If it\'s higher, it means the direction is correct. When I find a peak value - meaning the clarity scores above and below are not higher than that point - reduce the knob step to 0.2mm and repeat the above steps until the change in clarity score is less than 1%. This is when the best focus position is achieved. I haven\'t figured out the evaluation metrics yet, might involve Laplacian variance, gradient sum, and the previously mentioned grayscale entropy. When I first discussed my ideas with Hongfei, he pointed out a problem - clarity scores aren\'t necessarily single-peaked, debris can also photograph very clearly. I thought about it, this is a great question. Neither of us could think of a solution at the moment. Then I told him, let\'s first assume it\'s single-peaked, I\'ll implement the function first, then collect 50 values for example. If 10 of those 50 values are inaccurate, then it means we need to find a way to solve the multi-peak problem. We don\'t know what will happen next, so we make this task the simplest and most direct, then we simulate it, then add or modify code. I think this is a great experimental method when you don\'t know the outcome. Oh my god, it\'s already 9:20, later I still need to work on some hill climbing algorithm code, do IELTS, and shower. I\'ll record up to here. I really didn\'t expect I could be this happy every day and have so many gains!',
      tags: ['Hill Climbing Algorithm', 'Problem Solving', 'Teamwork', 'Challenges'],
      mood: 'challenged',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 6,
      date: '2025-07-16',
      title: 'Day 7',
      content: 'Finding out there\'s a power outage tomorrow morning and I can\'t go to the lab makes me so sad. Can go earlier in the afternoon though. Been working on the hill climbing algorithm for two days, and I\'ve basically completed the initial version, including automatic platform movement to fixed points. Platform movement on the x and y axes was written by Student Sun Tong under my direction. I wrote the hill climbing algorithm, then connected the two together, calling functions in a certain order through the main method.\n\nI feel like just a few short lines can\'t describe the difficulty of my thinking process. Actually I started struggling yesterday, because I found my first for-each loop had flaws. Then I wrote another one with if-else conditional judgment, which wasn\'t great either. Before bed I made another for-each loop with a nested while loop. I thought one of these three would work. Then this morning I looked at them for a long time, none were ideal. For example, with the for-each loop, I start at an initial point and move up step = 0.5mm. If this clarity score is higher than the initial one, then take the one with higher clarity score. But at this point the code can\'t continue - it stops there, very incomplete. I always felt using a for loop seemed sophisticated, but actually after studying this I realized it\'s not suitable for for loops at all. Then I turned to if-else. If I want to continuously explore in a certain direction, wouldn\'t a while loop work? First use if-else to find the optimal direction, then use while loops in both up and down directions to continuously explore until the score decreases. But I also need to shorten the step length, so I made a conditional judgment: if step length hasn\'t reached minimum value, or score difference is greater than threshold, then I need to shorten step length and explore upward or downward again.\n\nSometimes you can\'t be too eager for quick results, but need to find the optimal solution. Listing multiple solutions seems time-consuming but is actually very beneficial for selecting the best and most suitable solution. You must have the big picture view, rather than getting stuck on one method for a long time. You think this method can be fixed with some tweaks, but actually maybe this method was unfeasible from the start.\n\nToday is too late, already 12:52 AM, because I made a little vlog about the internship. Pretty satisfied with it, seems my video editing skills have improved a lot.',
      tags: ['Algorithm', 'Problem Solving', 'Debugging', 'Video Editing'],
      mood: 'accomplished',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 7,
      date: '2025-07-17',
      title: 'Day 8',
      content: 'Wasn\'t there a power outage this morning? So I arrived at the lab around 2 PM in the afternoon. I was the third person there. After everyone arrived, Team Leader Hongfei talked to each of us about our issues. Sun Tong and I still had many small errors in our hill climbing algorithm. Then Hongfei said we needed to look at data structures - basically create a 2D array to store the platform\'s fixed point x and y values. I went home first to continue writing...\n\nContinuing now. My new task is to pass these three parameters xyz into the method for fitting the focal plane. Because I had already written the hill climbing algorithm before, but now I need to establish something like a coordinate system of scatter points (x, y, z), then use mathematical functions to fit these scatter points into a focal plane. So I divided the specimen width by the platform\'s step length and added 1 to get how many collection points there are in one row. Columns are the same principle as rows, so I got a matrix. Then I needed to map physical coordinates to array indices because (1,1) in mathematics is (0,0) in computer language, so I divided the current position by the step length to get the index. At this point, I called the hill climbing algorithm method and stored the optimal focal point in [xIndex, yIndex]. I traversed all the points in the matrix I just got - each point, which is an index, stores an optimal focal point (which is the z value). After that comes the surface fitting module, which is Hongfei\'s part.\n\nI finished the task I described above today, still pretty efficient. Got a little insight though - at first when I arrived at the lab and Hongfei told me we needed to work on xyz data structures, I boldly volunteered to do it. But I actually didn\'t fully understand it yet. I don\'t know if this is right - not having the ability but wanting to appear capable. I think in this kind of project setting, being proactive about taking on tasks is pretty good. For parts I don\'t know, Hongfei can help me fix them, and others can assist me too. But if this scenario were in a company, once you take on a task, there\'s no turning back - you must do it well and beautifully. So before taking on tasks, you need to evaluate the task difficulty, in other words, whether you can actually complete this task. The boss definitely only looks at results. This is just my thought - maybe work in the future won\'t be as absolute as I imagine. But anyway, today was still great, very courageous. Giving myself a round of applause.',
      tags: ['Data Structures', 'Focal Plane Fitting', 'Self-awareness', 'Task Management'],
      mood: 'accomplished',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '6 hours'
    },
    {
      id: 8,
      date: '2025-07-18',
      title: 'Day 9',
      content: 'If I had to use a color to describe today\'s mood, it would be blue. It\'s like all the bad emotions accumulated in this one moment. I have no place to pour them out, so I can only record them with words.\n\nJust now a teacher forwarded our school\'s good news about this year\'s AP scores. That always-amazing guy got 5s on 5 exams, and he\'s only in 10th grade. Instantly a heavy stone pressed on my heart. He\'s always been this amazing - photography, soccer... In my eyes he\'s almost perfect, and today\'s 5 fives prove it even more. He\'s like brilliant shining light, while I\'m so small and dark next to him. I can\'t figure out why I only got 1 five. Everyone saw my hard work - every night until 2 AM with just one dim lamp, I was there studying chemistry. What was it all for? Why did the heavens treat me this way? Even those I thought weren\'t as good as me scored better than me. Why? I think what limits me most is my talent, because I really worked so hard. I admit I\'m someone very bad at taking tests, though usually I learn really well. In middle school, when others listened enthusiastically in physics class, I kept silently repeating in my heart: "Don\'t call on me, please don\'t call on me." I was thinking then: Am I really suited for studying? Freshman year when I ranked first in my grade for average score, I found my confidence again. I learned physics, chemistry, and biology really well then. However today, I feel like I\'m back to being that middle school me - how can I be this bad? A few days ago during the internship I was thinking I was pretty amazing, better than those two freshman girls. But now I realize how absurd that thought was - I\'m not even as good as someone a year younger than me. Today when I submitted my task to the team leader, I self-righteously thought I did really well. Actually the leader thought I didn\'t consider things comprehensively enough, there were many small errors. I was completely devastated at that moment, didn\'t know where to fix it. I used an iterator in my code, and the leader asked why use an iterator, why not just use if-else conditional judgment. I still think using an iterator is more efficient. It seems we two couldn\'t resonate. This is when I realized code is also a language for communication between people. I use my language, but the leader can\'t understand my language, so I should explain in detail, like restating and explaining in conversation. I think I didn\'t do this well, didn\'t make the leader understand my code - this is my mistake. I have such a headache. I really don\'t want to fix it, don\'t know how to fix it. Finally the leader said: "Forget it, I\'ll fix it myself." He\'s really so good, I\'m really so terrible. Maybe with my grades I can\'t get into my ideal school, but I think every school has boss-level people. I shouldn\'t have this arrogant attitude - this has always been my mistake. Rather I should be humble, learn with an open mind, observe and listen. Ability is continuously cultivated. Ah, writing to this point, I realize my thinking is contradictory. If your ability isn\'t that good, then of course you need to cultivate it. When you meet amazing people, you need to humbly ask for advice. I\'m really not satisfied with my AP scores, but I know this is just one test. What\'s more important is my insights and reflections after failure. Being depressed is good - learn to accept your own inadequacies, then transform this emotion into positive energy and keep moving forward. In college and work, it\'s not just grades they look at, but also communication ability, teamwork, many abilities outside your major. I hope through this internship I can also cultivate these abilities. As for math and science, in my perception I\'m average, so I\'ll keep learning, continuously strengthening myself. Just like Steve Jobs said: "Stay hungry, stay foolish."',
      tags: ['Self-reflection', 'AP Scores', 'Self-doubt', 'Growth Mindset'],
      mood: 'challenged',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 9,
      date: '2025-07-21',
      title: 'Day 10',
      content: 'Although there wasn\'t much output today (actually there was), I learned a lot. Today the team leader told me he ran my hill climbing algorithm over the weekend - very slow, very low accuracy. Then he redid a hill climbing algorithm, still very unstable. So today he had me continue optimizing based on his, and before leaving in the afternoon I finally made one. But when the leader debugged it, there was an error: "System.AccessViolationException: Attempted to read or write protected memory. This typically indicates that other memory is corrupt." This means my algorithm occupies too much memory. Still need to optimize tomorrow. The leader also said if it really doesn\'t work, just use the one he wrote - after all, running without errors is already pretty good. But these are all things he said. I wasn\'t there when he was debugging the hill climbing algorithm, so I haven\'t seen it with my own eyes. I don\'t think it\'s necessarily an algorithm problem. Maybe the exploration step length was set too small, or the evaluation system\'s score difference threshold was set too small. There are many variable assignments that could lead to low efficiency. As they say, experiments yield truth. At first I thought I wrote it very comprehensively, but the machine itself has errors. Many uncontrollable factors lead to low operation efficiency, so what we write in code initially is our idealism, but reality isn\'t like that. So experiments yield truth. Although the leader did experiments, I wasn\'t there, so I must find time to debug the hill climbing algorithm part together with the leader. I must witness with my own eyes the execution effect of the hill climbing algorithm code.\n\nActually I was really frustrated today when I learned my hill climbing algorithm was passed over. I worked so hard on it for two days! Fortunately my communication with the team leader was appropriate, and I understood why the leader would think this way. So this communication ability is very important. Many times what makes you angry or contradictory, the other person doesn\'t know. So you must speak up, then you can reach a compromise and continue working towards a common goal together.',
      tags: ['Debugging', 'Communication', 'Experiments', 'Persistence'],
      mood: 'challenged',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 10,
      date: '2025-07-22',
      title: 'Day 11',
      content: 'In the blink of an eye it\'s the 11th day of internship. Time flies. Today was another weekly meeting as usual, but I\'m still not satisfied with our team\'s progress. The second team, the one doing cell segmentation, they\'re basically done. They stopped because they need to do machine learning and label tens of thousands of cells, and also Professor Li strongly required that the machine learning step must be included. The third team is doing recognition, they\'re doing fine. We\'re the first team, and I feel like we just got the algorithms done, and many don\'t work well and need to be redone. I didn\'t look at the hill climbing algorithm at all today because I couldn\'t even see our microscope - the teacher next door was using it the whole time. This afternoon the teacher brought over another microscope, which means our camera bag needs to be reconfigured, many things need to be redone. One good thing is I think the precision of the replaced equipment is higher, though I don\'t know if that\'s correct, because I looked at the internal structure this afternoon - it\'s actually just a box covering the microscope, the main microscope body inside is still the same. So today I didn\'t implement the hill climbing algorithm. I\'ll wait for the leader to configure the new microscope, then quickly debug it. It\'s been several days, completely not my swift and decisive style. I don\'t like dragging one thing out for a long time. If it can be done well quickly, do it to the best.\n\nSo you must be wondering: what did you do today? I\'ve been thinking about making a personal website recently, but had absolutely no idea where to start. Today I looked into how to do it: I first searched online for excellent personal website examples. While browsing I saw one personal website I really liked, then I looked at what algorithms this website used. That\'s when I learned that frontend code relies on HTML framework and CSS, and CSS must run dependent on HTML. CSS is more like styling, decorating existing frameworks with colors, layout, etc. I found a tutorial on Bilibili and successfully completed building a to-do list interface. Then I thought - the WinForms I did before is also frontend. So what\'s the difference between WinForms and HTML? WinForms is desktop application development technology under the .NET framework, based on C#, and can only run on Windows systems. HTML is HyperText Markup Language, used to build webpage structure, paired with CSS (style) and JavaScript (behavior) to achieve complete webpages. The difference is quite big. I think one of the biggest differences is the interface construction method. WinForms is visual drag-and-drop development - drag controls over, use mouse to handle position and size, write handler functions through event callbacks. HTML is completely different - as a developer you\'re completely in the unknown. All structure and controls must be manually written through tag syntax. CSS style code also needs <style></style> tag processing. Much harder than WinForms. Taking someone else\'s code directly will also make you very dizzy - too many tags, nested or parallel. But I think getting started is simpler, because with WinForms your code still has to be based on C#, which is undoubtedly like Java and Python - you need to know classes and objects, methods, constructors, those algorithm structure concepts. However, HTML\'s class is just naming a container, convenient for recognition when processing styles - completely different. After comparing so much, I feel there\'s no comparability - they\'re completely two different things. They just both involve interface structure. When I was learning today, HTML & CSS also have properties like padding and margin, etc. This part has some interconnectivity.\n\nLearning is an endless thing. Say you\'re not in school now with no teachers, not in a company with no boss, no one telling you what to do - would you still actively learn or work? I believe many people would lose direction, indulge in the dopamine rush from phones and computers. I\'ve had times like that, and I\'m still fighting against it. But I have a work notebook (recording what I learn each day from work or videos) and a life notebook (electronic diary) that have changed me a lot. When I visualize what I\'ve done, I get a great sense of achievement. People including my past self focus too much on results, often think of bad results, then become procrastinating, unwilling to work hard, thinking effort doesn\'t necessarily lead to success. I used to be like that many times, then start scrolling on my phone. Actually process is greater than result. What you do each day might not directly lead to results but definitely helps you. This is how I learn, record, think, reflect, learn - this cycle will definitely bring qualitative change to my growth and help. As I said, don\'t focus too much on results. The frustration in the process we should calmly accept - that\'s the necessary path to success. So now I don\'t just focus on whether our team\'s results are the fastest and best. Actually there\'s no meaning in comparing with other teams. What\'s more important is what I learned from each day\'s life and work. I\'ll keep learning, even if there are many waves ahead.',
      tags: ['Personal Website', 'HTML/CSS', 'Learning Philosophy', 'Self-reflection'],
      mood: 'inspired',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 11,
      date: '2025-07-23',
      title: 'Day 12',
      content: 'I\'m a bit dazed myself. Today was really exhausting. My brain feels like it crashed. I don\'t even know what happened today. Let me sort it out bit by bit.\n\nWhen I arrived this morning I thought today would just be continuing with the hill climbing algorithm. But suddenly the team leader told me maybe it\'s not the hill climbing algorithm\'s problem. He and another senior discussed it - the hill climbing algorithm logic is fine. It might be the evaluation system that\'s wrong. Actually I was skeptical about the evaluation system from the start. That senior kept telling my team leader to use grayscale entropy, but when I looked up materials, the evaluation system formulas given didn\'t include grayscale entropy. Grayscale entropy isn\'t strongly correlated with clarity. It\'s positively correlated with image texture complexity, meaning a clear image might have high entropy because of complex texture, or low entropy because of simple subject. However our cells have very little texture - due to the camera, cell surfaces are very smooth. Then I made one where the microscope z-axis moves from bottom to top with fixed step length, then photographs and scores - kind of testing the scoring standard. The code I wrote now hasn\'t been used yet.\n\nIn the afternoon the leader sent me a bunch of folders. Each folder corresponds to one cell\'s focus scan, and the folder name is in the format z-axis + score. I made a 2D function in MATLAB - horizontal axis is z-axis value, vertical coordinate is corresponding score. When I input the folder address, it automatically generates this function based on folder names (z-axis + score), then I can see if this function has one big peak value, thus determining if the evaluation system has problems. This is just a small tool to facilitate later verification. The core is still how to write the evaluation system, what indicators to use, how to weight them.\n\nThen in the afternoon there was new notification saying our cells are fluorescent cells. I looked up materials and found evaluation systems for fluorescent cells and ordinary cells (color or black and white) use completely different evaluation indicators. For ordinary cells we use variance, Laplacian operator, Sobel gradient, Tenengrad method, and the previously mentioned grayscale entropy. I haven\'t continued researching fluorescence cell evaluation system algorithms - just know they\'re very different. Good thing today I implemented the ordinary cell evaluation system. I verified many sets of photos, no problems. But when I applied it to fluorescent cells, it was completely like a roller coaster - many many big peak values, and the highest peak value wasn\'t the z-axis corresponding to the moment of highest clarity. So we need to design evaluation indicators specifically.\n\nWe really walked so many detours. If someone could have told us from the start that the cells we\'re collecting are fluorescent cells, that the microscope used is the new one not the original one (meaning camera configuration is different) - how good would that be? Is it that our initial planning was bad? Actually not - we planned very clearly. It\'s just this kind of sudden situation is hard to avoid. I really don\'t like this, but I\'m also starting to learn to accept it. It\'s like I can learn new knowledge again. Don\'t know if we can finish before the deadline, but as I said yesterday - the process is more important. Care about what I learned, not that result. If we failed, so what? Summarize experience, do it again!',
      tags: ['Fluorescence Cells', 'Evaluation System', 'MATLAB', 'Adaptability'],
      mood: 'challenged',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 12,
      date: '2025-07-24',
      title: 'Day 13',
      content: 'Today when choosing my major I came across a post that expressed exactly what I was thinking, but said more beautifully:\n\n1. The essence of choice is abandonment.\n\nWhen you choose one path, it means giving up all other possible paths. Sartre said: "Man is nothing else but what he makes of himself." You cannot "not choose," because even hesitation or escape is itself a choice, and the cost is the loss of opportunities and delay in self-definition.\n\n2. The weight of the cost comes from freedom\n\nThere is no absolutely "correct" choice, only choices you give meaning to. For example:\n— Choose a stable job, the cost might be the fading of passion;\n— Pursue your dream, the cost might be sacrifice of security.\n\nThis dilemma has no standard answer, because the value of the cost can only be measured by yourself.\n\n3. Cost is not punishment, but the mirror of responsibility\n\nSartre wrote in "Existentialism is a Humanism": "Man is the sum of all his choices." The cost you pay ultimately shapes who you are.\n\n4. How to face the cost of choices?\n\nThe existentialist attitude is:\n— Clearly recognize the cost (don\'t deceive yourself);\n— Bear all consequences of your choice (don\'t blame external factors);\n— Redefine meaning through action (cost is not the endpoint, but material in your life story).\n\nDue to strong interest plus society\'s emphasis on technology talent, I chose engineering as my major. I know that choosing engineering means I can\'t choose literature, arts, economics - those majors I\'m equally interested in. I still remember once when I was young, I cried and insisted on taking the music path. My parents didn\'t agree, so I wrote and released songs myself, watched movies, read novels, traveled - to satisfy my spiritual needs. I\'m someone who really needs romance, but also someone who\'s cool and pragmatic. The world exists in this contradiction, this intersection - so what? I can still fill my interests in my spare time. If possible, in the future there will be many intersections between art and technology. While writing this I thought of a line from "Dead Poets Society" that I really like: "Medicine, law, business, engineering - these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love - these are what we stay alive for."',
      tags: ['Philosophy', 'Major Choice', 'Existentialism', 'Life Reflection'],
      mood: 'inspired',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    },
    {
      id: 13,
      date: '2025-07-26',
      title: 'Day 14',
      content: 'Yesterday I already knew that today we needed to complete two documents (Technical Specification and User Manual). As soon as I arrived at the lab today I went crazy working. The Technical Specification requirements were quite detailed - roughly need to explain method principles, give qualitative analysis and quantitative experimental results (tables/figures), list all technical details and specification parameters (interface format, performance indicators, memory/computing power/storage requirements, environment). My main job was to write out the framework first. With so much content, it must be presented clearly and logically. Then I combined previous documents the leader gave me including PPTs others made and completed it. For details like interfaces, I had the leader perfect those. Morning done!\n\nAfternoon I continued writing the second document. The User Manual is like an instruction manual, letting users with no professional knowledge quickly get started with our software and hardware. I had a female colleague screenshot all our user interfaces for me, then I wrote out the steps. Very fast - less than an hour, this document was done. The most pleasant surprise was that the team leader thought the second document was written better than the first. He praised me saying my comprehension ability is very strong - I could write 80% myself, he only needed to modify 20%. I don\'t remember if I wrote about my comprehension ability in previous diary entries, though I think I wrote about learning ability - there\'s a strong correlation. My comprehension ability at work is indeed very strong. When the leader says something once, I can quickly turn the key points he mentioned into bullet points and record them in my work notebook. But in life my comprehension ability is actually just normal, maybe because I put all my energy into study and work. Communication ability I think I wrote about before - communication ability, comprehension ability, learning ability are all the most basic abilities. Mastering these three I think makes you a qualified and excellent person in the workplace.\n\nToday\'s work efficiency was super high! Quickly, efficiently and with high quality completed the documents. Besides that, I also finished learning MATLAB. The biggest feeling the moment I finished learning is that MATLAB is more like an advanced calculator. Many function methods inside are written well, you just need to know how to use this advanced calculator. In other words, understand functions in MATLAB and be able to call them - solve equations, draw graphs, find various solutions. Really too similar. Oh right, one difference - MATLAB can achieve 3D plotting. If we did this project with MATLAB it would be very easy to implement, like evaluation systems and 3D surface fitting - many functions are already written. But the teacher only lets us use C# so right now focal plane fitting is still trying to be implemented. MATLAB is really so convenient, C# is also challenging ourselves.\n\nFinally let me talk about the evaluation system. It seems complete, but there are many many details that can be perfected. A senior has very high expectations for us. The function we got of evaluation score versus z-axis - some have multiple peak values. This might be related to our indicator selection, so we\'re thinking whether we can change indicators again, find some unconventional method to make the function single-peaked. Another method for single peak is adding a fitting function, fitting the four indicators - variance, Laplacian operator, Sobel gradient, Tenengrad method - into single peak. Finally if both these methods don\'t work, we\'ll try ROI (region of interest) - crop out cells that are hard to judge, for example. Of course we\'ve already tried many indicators and walked many detours. Getting to now is already very not easy. Looking forward to the results of the last week!',
      tags: ['Documentation', 'MATLAB', 'High Efficiency', 'Evaluation System'],
      mood: 'accomplished',
      company: 'Medical Imaging Lab',
      department: 'Research & Development',
      duration: '8 hours'
    }
  ];

//  const getMoodColor = (mood) => {
//    switch (mood) {
//      case 'excited': return '#fa709a';
//      case 'challenged': return '#4facfe';
//      case 'inspired': return '#764ba2';
//      case 'accomplished': return '#43e97b';
//      case 'collaborative': return '#667eea';
//      case 'proud': return '#f093fb';
//      default: return '#666';
//    }
//  };

//  const getMoodText = (mood) => {
//    switch (mood) {
//      case 'excited': return 'Excited';
//      case 'challenged': return 'Challenged';
//      case 'inspired': return 'Inspired';
//      case 'accomplished': return 'Accomplished';
//      case 'collaborative': return 'Collaborative';
//      case 'proud': return 'Proud';
//      default: return 'Unknown';
//    }
//  };

  return (
    <div style={{ minHeight: '100vh', background: '#000000' }}>
      {/* Top Navigation Bar - Menu Only */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.95)',
        borderBottom: '1px solid #333',
        zIndex: 1000,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px'
        }}>
          {/* Left side - Title */}
          <h1 style={{
            color: '#ffffff',
            fontSize: '24px',
            fontWeight: '600',
            margin: 0,
            letterSpacing: '0.5px'
          }}>
            Internship Diary
          </h1>

          {/* Right side - Menu button */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'transparent',
                border: '2px solid #ffffff',
                color: '#ffffff',
                padding: '10px 24px',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
              }}
            >
              Menu {menuOpen ? '▲' : '▼'}
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <div style={{
                position: 'absolute',
                top: '60px',
                right: 0,
                background: 'rgba(0, 0, 0, 0.95)',
                border: '1px solid #333',
                borderRadius: '15px',
                minWidth: '200px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden'
              }}>
                {mainSections.map((section, index) => (
                  <a
                    key={section.id}
                    href={section.link}
                    style={{
                      display: 'block',
                      padding: '15px 25px',
                      color: '#999',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      borderBottom: index < mainSections.length - 1 ? '1px solid #222' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#1a1a1a';
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#999';
                    }}
                  >
                    {section.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Content area with padding for fixed nav */}
      <div style={{ paddingTop: '70px' }}>

      {/* Diary Entry Detail */}
      <section style={{
        padding: '80px 0',
        background: '#000000',
        minHeight: 'calc(100vh - 70px)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          {diaryEntries.filter(entry => entry.id === selectedDiary).map((entry) => (
              <article key={entry.id}>
                {/* Entry Header */}
                <div style={{
                  marginBottom: '40px',
                  paddingBottom: '30px',
                  borderBottom: '2px solid #f0f0f0'
                }}>
                  <h1 style={{
                    fontSize: '42px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '20px'
                  }}>
                    {entry.title}
                  </h1>
                  <div style={{
                    color: '#999',
                    fontSize: '16px'
                  }}>
                    {new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>

                {/* Entry Image - Auto load based on ID */}
                <DiaryImage id={entry.id} title={entry.title} />

                {/* Entry Content */}
                <div style={{
                  fontSize: '18px',
                  lineHeight: '2',
                  color: '#333',
                  marginBottom: '40px',
                  letterSpacing: '0.3px',
                  whiteSpace: 'pre-line'
                }}>
                  {entry.content}
                </div>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '60px'
                }}>
                  {entry.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: '8px 16px',
                      background: '#f5f5f5',
                      color: '#999',
                      borderRadius: '20px',
                      fontSize: '15px',
                      fontWeight: '500',
                      border: '1px solid #e0e0e0'
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Pagination Navigation */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '60px',
                  paddingBottom: '40px'
                }}>
                  {/* Previous Button */}
                  <button
                    onClick={() => handleDiaryChange(Math.max(1, selectedDiary - 1))}
                    disabled={selectedDiary === 1}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: selectedDiary === 1 ? '#ccc' : '#666',
                      fontSize: '24px',
                      cursor: selectedDiary === 1 ? 'not-allowed' : 'pointer',
                      padding: '5px 15px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedDiary !== 1) {
                        e.target.style.color = '#000';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedDiary !== 1) {
                        e.target.style.color = '#666';
                      }
                    }}
                  >
                    ‹
                  </button>

                  {/* Page Numbers */}
                  {(() => {
                    const totalPages = diaryEntries.length;
                    const currentPage = selectedDiary;
                    const pageNumbers = [];

                    // Always show first page
                    pageNumbers.push(1);

                    // Show ellipsis and middle pages
                    if (currentPage > 4) {
                      pageNumbers.push('...');
                    }

                    // Show pages around current page
                    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
                      if (!pageNumbers.includes(i)) {
                        pageNumbers.push(i);
                      }
                    }

                    // Show ellipsis before last page
                    if (currentPage < totalPages - 3) {
                      pageNumbers.push('...');
                    }

                    // Always show last page
                    if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
                      pageNumbers.push(totalPages);
                    }

                    return pageNumbers.map((pageNum, index) => {
                      if (pageNum === '...') {
                        return (
                          <span
                            key={`ellipsis-${index}`}
                            style={{
                              color: '#999',
                              fontSize: '18px',
                              padding: '5px 10px'
                            }}
                          >
                            ...
                          </span>
                        );
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => handleDiaryChange(pageNum)}
                          style={{
                            background: selectedDiary === pageNum ? '#000' : 'transparent',
                            border: 'none',
                            color: selectedDiary === pageNum ? '#fff' : '#666',
                            fontSize: '16px',
                            fontWeight: selectedDiary === pageNum ? '600' : '400',
                            cursor: 'pointer',
                            padding: '8px 14px',
                            borderRadius: '6px',
                            transition: 'all 0.3s ease',
                            minWidth: '40px',
                            borderBottom: selectedDiary === pageNum ? '3px solid #667eea' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (selectedDiary !== pageNum) {
                              e.target.style.background = '#f5f5f5';
                              e.target.style.color = '#000';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selectedDiary !== pageNum) {
                              e.target.style.background = 'transparent';
                              e.target.style.color = '#666';
                            }
                          }}
                        >
                          {pageNum}
                        </button>
                      );
                    });
                  })()}

                  {/* Next Button */}
                  <button
                    onClick={() => handleDiaryChange(Math.min(diaryEntries.length, selectedDiary + 1))}
                    disabled={selectedDiary === diaryEntries.length}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: selectedDiary === diaryEntries.length ? '#ccc' : '#666',
                      fontSize: '24px',
                      cursor: selectedDiary === diaryEntries.length ? 'not-allowed' : 'pointer',
                      padding: '5px 15px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedDiary !== diaryEntries.length) {
                        e.target.style.color = '#000';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedDiary !== diaryEntries.length) {
                        e.target.style.color = '#666';
                      }
                    }}
                  >
                    ›
                  </button>
                </div>
              </article>
            ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Internship;
