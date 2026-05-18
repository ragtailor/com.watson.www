"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type AuthTab = "login" | "signup";

type AuthPanelProps = {
  defaultTab?: AuthTab;
  className?: string;
  onSuccess?: () => void;
};

export function AuthPanel({
  defaultTab = "login",
  className,
  onSuccess,
}: AuthPanelProps) {
  const [tab, setTab] = useState<AuthTab>(defaultTab);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSuccess?.();
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSuccess?.();
  };

  return (
    <div className={cn("w-full", className)}>
      <Tabs
        value={tab}
        onValueChange={(v) => setTab(v as AuthTab)}
        className="gap-6"
      >
        <TabsList className="grid h-11 w-full grid-cols-2 rounded-full bg-slate-100 p-1">
          <TabsTrigger
            value="login"
            className="rounded-full data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:shadow-sm"
          >
            로그인
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="rounded-full data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:shadow-sm"
          >
            회원가입
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="mt-0 space-y-5">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-user-id">사용자 ID</Label>
              <Input
                id="login-user-id"
                name="userId"
                type="text"
                autoComplete="username"
                placeholder="아이디를 입력하세요"
                required
                className="h-11 rounded-xl border-slate-200 bg-slate-50/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">비밀번호</Label>
              <Input
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="비밀번호를 입력하세요"
                required
                className="h-11 rounded-xl border-slate-200 bg-slate-50/50"
              />
            </div>
            <Button
              type="submit"
              className="h-11 w-full rounded-full bg-sky-600 text-base font-semibold hover:bg-sky-500"
            >
              로그인
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="signup" className="mt-0 space-y-5">
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-id">아이디</Label>
              <Input
                id="signup-id"
                name="id"
                type="text"
                autoComplete="username"
                placeholder="아이디"
                required
                className="h-11 rounded-xl border-slate-200 bg-slate-50/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">비밀번호</Label>
              <Input
                id="signup-password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="비밀번호"
                required
                className="h-11 rounded-xl border-slate-200 bg-slate-50/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-nickname">닉네임</Label>
              <Input
                id="signup-nickname"
                name="nickname"
                type="text"
                autoComplete="nickname"
                placeholder="닉네임"
                required
                className="h-11 rounded-xl border-slate-200 bg-slate-50/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">이메일</Label>
              <Input
                id="signup-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="example@email.com"
                required
                className="h-11 rounded-xl border-slate-200 bg-slate-50/50"
              />
            </div>
            <Button
              type="submit"
              className="h-11 w-full rounded-full bg-sky-600 text-base font-semibold hover:bg-sky-500"
            >
              회원가입
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
