import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const events = [
  { date: "Pehli Mulaqat", text: "Jab pehli baar dekha tha — sab kuch badal gaya", emoji: "✨" },
  { date: "Pehli Baat", text: "Nervously pehla message bheja — aur tu reply kar gayi", emoji: "💬" },
  { date: "Pehli Call", text: "Ghanton baat ki thi — time ka pata hi nahi chala", emoji: "📞" },
  { date: "Woh Special Din", text: "Jab pehli baar realize hua — yeh kuch alag hai", emoji: "🦋" },
  { date: "Saath Wala Time", text: "Sab kuch perfect tha — tu thi, main tha, duniya theek thi", emoji: "🌸" },
  { date: "Mushkil Waqt", text: "Cheezein badalne lagin — par feelings nahi badlin", emoji: "🌧️" },
  { date: "Dooriyan", text: "Dur hona pada — par dil se dur nahi ho paayi tu", emoji: "💔" },
  { date: "Aaj", text: "11 mahine ho gaye — par har din tujhe yaad karta hu", emoji: "🤍" },
];

const AnimatedTimeline = () => {
  return (
    <section className="py-20 bg-gradient-romantic">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Hamari Kahani 💫
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Har chapter yaad hai mujhe
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/20" />

          {events.map((event, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", damping: 20 }}
                className={`relative mb-12 flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Center dot */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 z-10"
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/30">
                    <Heart className="h-4 w-4 text-primary" fill="currentColor" />
                  </div>
                </motion.div>

                {/* Card */}
                <div className={`w-[calc(50%-2rem)] ${isLeft ? "pr-4 text-right" : "pl-4 text-left"}`}>
                  <div className="glass-card rounded-xl p-5">
                    <span className="text-2xl">{event.emoji}</span>
                    <h3 className="mt-2 font-display text-sm font-semibold text-primary">
                      {event.date}
                    </h3>
                    <p className="mt-1 font-display text-sm italic text-foreground">
                      {event.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTimeline;
