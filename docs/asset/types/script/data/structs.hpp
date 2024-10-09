struct color_unpacked
{
  unsigned __int8 r;
  unsigned __int8 g;
  unsigned __int8 b;
  unsigned __int8 a;
};

union hudelem_color_t
{
  color_unpacked unpacked;
  int rgba;
};

typedef float vec2_t[2];
typedef float vec3_t[3];
typedef float vec4_t[4];

namespace t6
{
  struct hudelem_s
  {
    float x;
    float y;
    float z;
    float fontScale;
    float fromFontScale;
    int fontScaleStartTime;
    hudelem_color_t color;
    hudelem_color_t fromColor;
    int fadeStartTime;
    int scaleStartTime;
    float fromX;
    float fromY;
    int moveStartTime;
    int time;
    int duration;
    float value;
    float sort;
    hudelem_color_t glowColor;
    int fxBirthTime;
    unsigned int flags;
    __int16 targetEntNum;
    __int16 fontScaleTime;
    __int16 fadeTime;
    __int16 label;
    __int16 width;
    __int16 height;
    __int16 fromWidth;
    __int16 fromHeight;
    __int16 scaleTime;
    __int16 moveTime;
    __int16 text;
    unsigned __int16 fxLetterTime;
    unsigned __int16 fxDecayStartTime;
    unsigned __int16 fxDecayDuration;
    unsigned __int16 fxRedactDecayStartTime;
    unsigned __int16 fxRedactDecayDuration;
    unsigned __int8 type;
    unsigned __int8 font;
    unsigned __int8 alignOrg;
    unsigned __int8 alignScreen;
    unsigned __int8 materialIndex;
    unsigned __int8 offscreenMaterialIdx;
    unsigned __int8 fromAlignOrg;
    unsigned __int8 fromAlignScreen;
    unsigned __int8 soundID;
    char ui3dWindow;
  };

  struct game_hudelem_s
  {
    hudelem_s elem;
    int clientNum;
    int team;
    int archived;
  };

  struct cg_hudelem_t
  {
    float x;
    float y;
    float rotation;
    float width;
    float height;
    char hudElemLabel[256];
    float labelWidth;
    char hudElemText[256];
    float textWidth;
    void* /*Font_s*/ *font;
    float fontScale;
    float fontHeight;
    float color[4];
    int timeNow;
  };

  struct pathnode_constant_t
  {
    int type;
    int spawnflags;
    unsigned __int16 targetname;
    unsigned __int16 script_linkName;
    unsigned __int16 script_noteworthy;
    unsigned __int16 target;
    unsigned __int16 animscript;
    int animscriptfunc;
    vec3_t vOrigin;
    float fAngle;
    vec2_t forward;
    float fRadius;
    float minUseDistSq;
    __int16 wOverlapNode[2];
    unsigned __int16 totalLinkCount;
    void* /*pathlink_s**/ Links;
  };

}

namespace t5
{
  struct hudelem_s
  {
    float x;
    float y;
    float z;
    float fontScale;
    hudelem_color_t color;
    hudelem_color_t fromColor;
    int fadeStartTime;
    int scaleStartTime;
    float fromX;
    float fromY;
    int moveStartTime;
    int time;
    int duration;
    float value;
    float sort;
    hudelem_color_t glowColor;
    int fxBirthTime;
    __int16 targetEntNum;
    __int16 fadeTime;
    __int16 label;
    __int16 width;
    __int16 height;
    __int16 fromWidth;
    __int16 fromHeight;
    __int16 scaleTime;
    __int16 moveTime;
    __int16 text;
    unsigned __int16 fxLetterTime;
    unsigned __int16 fxDecayStartTime;
    unsigned __int16 fxDecayDuration;
    unsigned __int16 fxRedactDecayStartTime;
    unsigned __int16 fxRedactDecayDuration;
    unsigned __int16 flags;
    char type;
    char font;
    char alignOrg;
    char alignScreen;
    char materialIndex;
    char offscreenMaterialIdx;
    char fromAlignOrg;
    char fromAlignScreen;
    char soundID;
    char ui3dWindow;
  };

  struct game_hudelem_s
  {
    hudelem_s elem;
    int clientNum;
    int team;
    int archived;
  };

  struct cg_hudelem_t
  {
    float x;
    float y;
    float rotation;
    float width;
    float height;
    char hudElemLabel[256];
    float labelWidth;
    char hudElemText[256];
    float textWidth;
    void* /*Font_s*/ *font;
    float fontScale;
    float fontHeight;
    float color[4];
    int timeNow;
  };
}

namespace t4
{
  struct hudelem_s
  {
    int type;
    float x;
    float y;
    float z;
    int targetEntNum;
    float fontScale;
    float fromFontScale;
    int fontScaleStartTime;
    int fontScaleTime;
    int font;
    int alignOrg;
    int alignScreen;
    hudelem_color_t color;
    hudelem_color_t fromColor;
    int fadeStartTime;
    int fadeTime;
    int label;
    int width;
    int height;
    int materialIndex;
    int offscreenMaterialIdx;
    int fromWidth;
    int fromHeight;
    int scaleStartTime;
    int scaleTime;
    float fromX;
    float fromY;
    int fromAlignOrg;
    int fromAlignScreen;
    int moveStartTime;
    int moveTime;
    int time;
    int duration;
    float value;
    int text;
    float sort;
    hudelem_color_t glowColor;
    int fxBirthTime;
    int fxLetterTime;
    int fxDecayStartTime;
    int fxDecayDuration;
    int soundID;
    unsigned int flags;
  };

  struct game_hudelem_s
  {
    hudelem_s elem;
    int clientNum;
    int team;
    int archived;
  };

  struct cg_hudelem_t
  {
    float x;
    float y;
    float rotation;
    float width;
    float height;
    char hudElemLabel[256];
    float labelWidth;
    char hudElemText[256];
    float textWidth;
    void* /*Font_s*/ *font;
    float fontScale;
    float fontHeight;
    float color[4];
    int timeNow;
  };
}