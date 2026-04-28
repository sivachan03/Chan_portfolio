"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-muted/30"
    >
      <div className="container mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 gradient-text">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Whether you have a project in mind, want to collaborate, or
                  just want to say hello, I'd love to hear from you. Feel free
                  to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <p className="text-muted-foreground text-xs sm:text-sm truncate">
                      sivachandrangsenthil@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      +91 63832 29911
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm sm:text-base">Location</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Tirupur, TamilNadu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="animate-fade-scale animate-delay-200">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-lg sm:text-xl">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-xs sm:text-sm">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-xs sm:text-sm">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs sm:text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs sm:text-sm">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs sm:text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project or just say hello..."
                      className="text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
