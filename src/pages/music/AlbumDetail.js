import React from 'react';
import { useParams, Link } from 'react-router-dom';

const AlbumDetail = () => {
  const { albumId } = useParams();

  // Album data - you can expand this with your actual reviews
  const albumData = {
    charm: {
      title: 'Charm',
      artist: 'Clairo',
      cover: '/images/album-cover/Charm.jpg',
      ratesImage: '/images/album-rates/Charm-rates.png',
      year: '2024',
      genre: 'Indie Pop',
      review: `The gritty, lo-fi texture of the prelude in "Nomad" establishes a psychedelic, retro tone for the entire album. Accompanied by the sound of birds chirping, it becomes evident that the album is shaped around the theme of nature—transitioning from the winter hearth of Sling to the summer nostalgia of this record. "Sell all my things, become nomadic"—this metaphor is particularly vivid. Clairo expresses a desire to remain unseen, to wander like a nomad, solitary and free, hoping that "you" might visit "me." When "I" finally find "you," she wishes to wake up alone, without being reminded that what once was is nothing but a dream. This reflects Clairo's sorrow and pain over a past relationship. The line, "but I'd rather be alone than a stranger," further conveys her preference for solitude over becoming strangers with someone once intimate, highlighting the emotional scars left by the breakup and her resulting fear of intimacy. Her vocals blend seamlessly into the instrumentation, creating a harmonious whole. During times of stress, I often listen to the entire album as if it were one continuous track—it has become a remedy for my anxiety.

"Sexy to Someone" is not only my favorite track on the album but also one of my all-time favorites. It begins straightforwardly with the line, "Sexy to someone is all I really want." Each verse concludes with a sudden, striking piano chord that adds a lively touch to the otherwise laid-back melody. Between the first and second verses, a descending flute arpeggio creates a captivating transition that is both beautiful and memorable. The chorus's melody is so enchanting that I often find myself closing my eyes and swaying to the rhythm. It truly demonstrates how a serene narrative can build to an emotional climax without relying on bright, flashy melodies. The outro is equally clever, using a sound reminiscent of helicopter blades combined with a storytelling flute that leaves the listener longing for more.

With Clairo's "da-da-da-da-dum," the third track, "Second Nature," begins. The song constructs an inner world for Clairo, distinct from the straightforward expressions typical of pop love songs. Instead, Clairo focuses on the process of reflection before expressing emotions. She uses sensory details like, "It's when you're loud enough to cut in and through all the noise," to illustrate the profound impact her loved one has on her. Even when she isn't consciously thinking about this person, they still find their way into her awareness—this involuntary choice and feeling become her "second nature." "Slow Dance" continues the "da-dum" pattern from the previous track. After four repetitive drum measures, a piano duet enters—a combination rarely seen in modern pop music. The line, "That's keeping one foot out and the other crawling in bed," vividly captures the inner conflict through physical imagery.

"Thank You" opens with an electronic organ that instantly transports listeners back to the psychedelic, retro vibe of the 70s. The main melody is carried by the piano, resonating deeply with the emotions conveyed. Clairo acknowledges the incompatibility of the relationship from the start—"When you opened the door, cracked me wide open"—yet she uses this intimacy as a defense against loneliness. While opening her heart completely to love him, she remains anxious about whether he truly likes or accepts her. Nevertheless, Clairo still says, "I'd thank you for your time."

"Terrapin" begins with vocal humming, giving the impression that Clairo is in conversation with herself. The lines, "I guess that I don't cry. I guess that I don't shy," reflect her resolution and personal growth following the relationship.

My second favorite track on the album is "Juna." The lyrics, "It's when you talk close enough that I feel it on my skin. Breathe it in," capture Clairo's nuanced understanding of intimacy in love with delicate precision. The boundless vulnerability she expresses culminates in profound romance. Clairo's voice functions like an instrument here—her articulation and vocal delivery merge seamlessly with the accompaniment.

"Add Up My Love" stands out as one of the faster-paced tracks on the album, embracing a soft rock style. Accordingly, Clairo's vocal tone shifts, blending her usual gentleness with a touch of firmness. The 4/4 drum pattern, consistent across the album, is particularly catchy and rhythmically engaging. "Add up my love" is reflected in the hand resting on the back of "your" neck, in the way "you" breathe and call "my" name, in the laughter echoing from the back of the room, and in the ways "I" make "you" recognize boundaries.

In "Echo," Clairo writes that their love is destined to be shared with the world—the way they do so is through the echoes of each other's voices calling out one another's names.

The album concludes with the last two tracks, "Glory of the Snow" and "Pier 4," both carried by cheerful and light melodies. I remain enveloped in the warmth of the songs.`
    },
    smithereens: {
      title: 'SMITHEREENS',
      artist: 'Joji',
      cover: '/images/album-cover/SMITHEREENS.jpg',
      ratesImage: '/images/album-rates/SMITHEREENS-rates.png',
      year: '2022',
      genre: 'R&B/Soul',
      review: `"Glimpse of Us." I adore this song deeply. It carries a melancholic beauty, like a continuous drizzle that weaves a hazy, sorrowful atmosphere. When you delve into the lyrics, they add layers of scars to the profound melody. Joji's expression is so fitting—I can almost visualize a heartbroken person weeping after a breakup. In his current girlfriend's eyes, Joji catches glimpses of the past he shared with his ex. But the person before him isn't the one he truly loves; she's merely a companion to pass the time with. The lines evoke a pang of heartache even in someone like me who hasn't gone through a breakup. He then shifts to the ex-girlfriend's perspective, wishing she could see traces of him in her current boyfriend. The beauty lies not only in the composition but also in the underlying emotions. When both individuals see "a glimpse of us" in their new partners, isn't that, in its own way, a form of companionship?

"Feeling Like The End" uses a lighter musical style to describe the sorrow of Joji's relationship nearing its conclusion. However, I feel this track doesn't quite align with the tone set by the first song, "Glimpse of Us," as the emotion shifts from deep grief to a sense of acceptance. But that's Joji's signature—writing the saddest songs with upbeat melodies. The next track, "Die for You," returns to Joji's unresolved feelings for his ex. In the pre-chorus, Joji uses synths and piano to convey an inescapable sadness, leading into a chorus with faster-paced drums. In Joji's heart, as long as his loved one is happy, he no longer cares about the breakup—this reflects an absurd beauty born from his post-breakup desolation. It gives me a feeling similar to the poetic line, "Do not worry about not meeting friends on your journey; everyone under heaven knows you," though here it's about love, not friendship. We often say, "I wish you happiness," but to me, it often feels like an excuse after unrequited love—wanting an ex to find someone better, yet hoping she might still see his shadow in that person. Joji captures this sentiment perfectly. Even after the breakup, he still holds a place for her in his heart. Another possibility is that Joji wants his ex to know he always had her best interests at heart, even though nothing can return to how it was.

"Before The Day is Over" describes Joji's premonition that the relationship wouldn't last long even before the breakup. The recurring theme reflects his struggle and helpless desire to prolong the relationship. However, I find the melody of this song less pleasing. The highest note in each measure clashes with the drumbeat, creating a jarring effect, and the overall arrangement feels somewhat flat. Later, harmonies and synths are introduced, but the track largely recycles the melody from the verses.

"Dissolve" opens with a commonly heard guitar riff, and the entire song repeats the Amaj7 and Bm7 chords twice in a loop, which comes off as somewhat mechanical and monotonous. Still, these chords are undeniably well-loved and pleasing to the ear.

With its high-frequency, low-pitched vaporwave sounds, vocal layers melding with synths, and echoing drums, the opening of "NIGHT RIDER" creates a sensation of traveling through space. Through its arrangement, Joji treats us to an auditory feast.

"BLAHBLAHBLAH DEMO" carries a different vibe from the rest of the album—it's no longer about urgency and frustration. The song suggests a sense of defeat, yet also an indifferent, unwavering love: "I'm defeated and broken, but I don't care—I love you just as you are."

The next track, titled "YUKON"—named after the remote northwestern Canadian territory bordering Alaska—symbolizes Joji finally letting go of his attachment. He drives an all-black Dodge, accelerating westward, moving toward an end tinged with melancholy.

The final track, the shortest of all, acts as a summary for the entire album, expressing his thoughts plainly: What Joji truly wants is still her companionship, but in the end, he remains alone.

At times, it's a painful gaze ("Glimpse of Us"), at others a numb acceptance ("Feeling Like The End"), then struggle ("Before The Day is Over"), escapism through psychedelic sounds ("Dissolve"), and finally, a lonely conclusion ("1AM FREESTYLE"). The album blends multiple musical styles and emotional tones, which is reflected in its title "SMITHEREENS"—it's precisely these fragmented memories and emotions that piece together the real Joji.`
    },
    virgin: {
      title: 'Virgin',
      artist: 'Lorde',
      cover: '/images/album-cover/Virgin.jpg',
      ratesImage: '/images/album-rates/Virgin-rates.png',
      year: '2025',
      genre: 'Pop',
      review: `The opening of "Hammer" features an electronic wave that drifts between the left and right ear, consistently laying the melodic foundation. The metaphors of "hammer" and "nail" vividly depict a powerful desire for conquest. The line, "Some days, I'm a woman, some days, I'm a man," explores the fluidity of sexuality. Lorde speaks of feeling reborn, ready to face the uncertainties of the future, illustrating her stance between the past and the future—trapped in a state of chaos, yet prepared. The urgent but orderly drumbeat feels like a giant hand pulling the listener into the depths.

"What Was That." Whenever I listen to Lorde's music, I always sense a powerful, tension-filled strength. Here, she reminisces about the impulsive and tumultuous passions of youth. After unrequited love, the repeated, impassioned "What was that" highlights the turmoil and fantasies in her heart. The artist seems to regard that past relationship with disdain; now, as an adult woman, she faces even greater challenges.

"Shapeshifter" is my favorite track on the album in terms of arrangement. With its rap-like melody, the emotion gradually builds. The pre-chorus, with its layered falsetto and natural voice, creates an ethereal feel, leading into a chorus that escalates to a climax with multi-layered harmonies—an absolute cerebral rush. The lyrics are also brilliantly written, using extensive metaphors to highlight the artist's strength and resilience: "I've been the ice, I've been the flame. I've been the prize, the ball and chain. I've been the dice, the magic eight. I've been the siren, been the saint. I've been the fruit that leaves a stain. I've been up on the pedestal. But tonight I just want to fall."

The first half of "Man of The Year" carries a warmer tone, while the ending features electronic synthesizers and abruptly cuts off with explosive drums amid the cheers for the "man of the year."

"Favourite Daughter" is my top track on this album. In this song, I see myself: someone striving for perfection in everything, trying to be the best daughter in my mother's eyes. The "mother" Lorde refers to here has two meanings—one is her own mother, and the other is a metaphor for her fans and audience. Lorde wants to be the perfect star in the eyes of her fans. From the massive success of Pure Heroine to Melodrama, to the relative obscurity of Solar Power, fans have been expecting Lorde to deliver even better work. But with this album, Virgin, she undoubtedly aims to present a more authentic self—not the flawless star. However, this song primarily delves into the profound complexities of the mother-daughter relationship. The lyrics that resonate most deeply with me are: "Cause I'm an actress, all of the medals I won for ya. Breaking my back just to be your favourite daughter." It seems as if the grand dreams once held by the mother have been projected onto the next generation, doesn't it? Despite this, the artist appears to have achieved it, writing: "Breaking my back just, to be as brave as my mother."

"Current Affairs" moves away from the naive love of youth, shifting focus to the burdens and responsibilities behind love in adult womanhood. The song begins with a piano, setting the emotional groundwork, and for the first time, a male voice supports Lorde—fitting the theme of the track. Lorde longs for the love promised in passionate vows to remain even after physical intimacy.

"Clearblue" continues the exploration, delving into the psychological struggles of pregnancy, carried forward by Lorde's subdued vocals. Connecting to the earlier line, "I'm nobody's daughter," I interpret "I'm free" as the artist finding liberation in becoming a mother herself, rather than solely being a daughter to her own mother.

"GRWM" plainly highlights the artist's transition from girlhood to mature womanhood.

The drumbeat in "Broken Glass" sounds like plastic or metal sheets being struck, followed by a snare drum, then the entry of synth string melodies and vocals. The song discusses the deceptive efforts made for a perfect physique—efforts that are not sustainable. When she looks at herself in the mirror, she firmly believes it's nothing but broken glass. Struggling between the ideal body and her true self, Lorde chooses authenticity.

"If She Could See Me Now" provides a clearer answer: "As for me, I'm going back to the clay."

In "David," the line "I don't belong to anyone" feels like a spiritual ascension. Paired with the growing volume and accelerating frequency of the synthesizer, there's a moment where time seems to freeze, transitioning into a simple piano. Lorde sings the line, "Am I ever gonna love again?"—a rhetorical question to which she already knows the answer. Spiritually, she has broken free from the person who restrained her and has become who she wanted to be.`
    }
  };

  const album = albumData[albumId];

  if (!album) {
    return (
      <div style={{
        maxWidth: '800px',
        margin: '80px auto',
        padding: '0 20px',
        textAlign: 'center',
        minHeight: '100vh'
      }}>
        <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>Album Not Found</h2>
        <Link to="/music/album" style={{
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '1.1rem'
        }}>
          ← Back to Albums
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '60px 20px',
      minHeight: '100vh'
    }}>
      {/* Back Button */}
      <Link to="/music/album" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        marginBottom: '30px',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.gap = '12px';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.gap = '8px';
      }}>
        ← Back to Albums
      </Link>

      {/* Rating Image */}
      <div style={{
        background: '#111',
        borderRadius: '20px',
        padding: '40px',
        border: '1px solid #333',
        boxShadow: '0 10px 40px rgba(255,255,255,0.05)',
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img
          src={album.ratesImage}
          alt={`${album.title} ratings`}
          style={{
            maxWidth: '50%',
            height: 'auto',
            borderRadius: '12px'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `
              <div style="
                padding: 40px;
                text-align: center;
                color: #999;
              ">
                <p>Rating image not available</p>
              </div>
            `;
          }}
        />
      </div>

      {/* Review Content */}
      <div style={{
        background: '#111',
        borderRadius: '20px',
        padding: '40px',
        border: '1px solid #333',
        boxShadow: '0 10px 40px rgba(255,255,255,0.05)'
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '2px solid #333'
        }}>
          My Review
        </h3>
        <div style={{
          fontSize: '1.05rem',
          lineHeight: 1.8,
          color: '#ccc',
          whiteSpace: 'pre-line'
        }}>
          {album.review}
        </div>
      </div>
    </div>
  );
};

export default AlbumDetail;
