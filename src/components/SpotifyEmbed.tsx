import { motion } from "framer-motion";
import { Music } from "lucide-react";

const SpotifyEmbed = () => {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Music className="mx-auto mb-4 h-8 w-8 text-primary/60" />
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Hamare Gaane 🎵
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Har gaana tujhe yaad karta hai
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Replace the playlist ID with your own Spotify playlist */}
          <iframe
            style={{ borderRadius: 16 }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5Ejj0EkURtP?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Our Playlist"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center font-display text-sm italic text-muted-foreground"
        >
          Apni playlist ka link daal de yahan — main update kar dunga 🤍
        </motion.p>
      </div>
    </section>
  );
};

export default SpotifyEmbed;
