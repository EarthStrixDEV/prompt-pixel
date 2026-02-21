"use client";

import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "prompt-pixel-translations";

export interface PromptTranslation {
  promptId: string;
  locale: string;
  translatedPrompt: string;
  updatedAt: string;
}

type TranslationMap = Record<string, PromptTranslation>;

function loadAll(): TranslationMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as TranslationMap;
  } catch (e) {
    return {};
  }
}

function persistAll(map: TranslationMap) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

function compositeKey(promptId: string, locale: string) {
  return promptId + "::" + locale;
}

export function usePromptTranslations() {
  const [data, setData] = useState<TranslationMap>({});

  useEffect(function mount() {
    setData(loadAll());
  }, []);

  const getTranslation = useCallback(
    function get(promptId: string, locale: string): PromptTranslation | null {
      const key = compositeKey(promptId, locale);
      return data[key] || null;
    },
    [data]
  );

  const setTranslation = useCallback(
    function set(promptId: string, locale: string, translatedPrompt: string) {
      const key = compositeKey(promptId, locale);
      const entry: PromptTranslation = {
        promptId: promptId,
        locale: locale,
        translatedPrompt: translatedPrompt,
        updatedAt: new Date().toISOString(),
      };
      setData(function update(prev) {
        const next: TranslationMap = {};
        const keys = Object.keys(prev);
        for (let i = 0; i < keys.length; i++) {
          next[keys[i]] = prev[keys[i]];
        }
        next[key] = entry;
        persistAll(next);
        return next;
      });
    },
    []
  );

  const removeTranslation = useCallback(
    function remove(promptId: string, locale: string) {
      const key = compositeKey(promptId, locale);
      setData(function update(prev) {
        const next: TranslationMap = {};
        const keys = Object.keys(prev);
        for (let i = 0; i < keys.length; i++) {
          if (keys[i] !== key) {
            next[keys[i]] = prev[keys[i]];
          }
        }
        persistAll(next);
        return next;
      });
    },
    []
  );

  return {
    getTranslation: getTranslation,
    setTranslation: setTranslation,
    removeTranslation: removeTranslation,
  };
}
