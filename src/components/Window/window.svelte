<script lang="ts">
  import { type Snippet } from "svelte";
  import StatsChart from "./stats.svelte";

  const { avatar }: { avatar: Snippet } = $props();
</script>

<!-- Cut borders in the outer window or something -->
<!-- <div class="absolute">
  <div
    class="slanted-edge-left inline-block h-14 w-10 bg-blue-500"
    style="--p: 70px;"
  ></div>
  <div class="h-14 w-10 bg-blue-500"></div>
  <div
    class="slanted-edge-right inline-block h-14 w-10 bg-blue-500"
    style="--p: 70px;"
  ></div>
</div> -->

<!-- Main Window -->
<div
  class="scale-90 bg-blue-500 w-full min-h-[620px] max-w-[1219px] p-1"
  style="--aug-tr: 1.3em; --aug-bl: 1.3em; --aug-br: 2em; --aug-tl: 2em;"
  data-augmented-ui="tl-clip tr-clip br-clip bl-clip"
>
  <div
    class="w-full h-full p-1.5 inset-shadow-[1px_1px_24px_0px_var(--color-base-content)]"
    style="--aug-border-all: 2px; --aug-tr: 1.3em; --aug-bl: 1.3em; --aug-br: 2em; --aug-tl: 2em;"
    data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"
  >
    <div
      class="relative w-full h-full overflow-auto"
      style="--aug-border-all: 2px; --aug-tr: 1.3em; --aug-bl: 1.3em; --aug-br: 2em; --aug-tl: 2em;"
      data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"
    >
      <div class="py-3 px-1">
        <div class="flex flex-row w-full">
          <!-- [[ INCARNATION DETAILS HEADER ]] -->
          <div class="flex flex-col h-full pr-7">
            <div
              class="py-4 w-md mr-10 bg-blue-400 mb-6 ml-2 inset-shadow-[10px_10px_40px_10px_var(--color-cyan-300)]"
              style="--aug-border-all: 1px; --aug-tl: 2em;"
              data-augmented-ui="tl-clip border"
            >
              <h1 class="text-[40px] text-center tracking-[0.100em]">
                INCARNATION DETAILS
              </h1>
            </div>

            <!-- -> [[ INCARNATION DETAILS ]]: NAME -->
            <section class="ml-6 flex items-center gap-1">
              <h3 class="text-2xl">NAME:</h3>
              <div
                class="bg-blue-400 w-full max-w-[230px] min-h-[33px] rounded-none"
              >
                <span class="text-md text-center pl-2 inline-block mt-1.5"
                  >James Alvin Pendon</span
                >
              </div>
              <div
                class="bg-blue-400 relative ml-10 w-[100px] h-full min-h-[33px] rounded-none"
              >
                <span class=" text-md ml-2 mt-1.5 text-center inline-block"
                  >He/Him</span
                >
                <div
                  class="bg-blue-300 absolute right-0 w-2 h-full px-2.5 inline-block"
                >
                  <span class="absolute bottom-0.5 right-1 text-xs">▼</span>
                </div>
              </div>
            </section>

            <!-- -> [[ INCARNATION DETAILS ]]: AGE -->
            <section class="ml-[40px] mt-6 flex items-center">
              <h3 class="text-2xl mr-8">AGE:</h3>
              <input
                type="checkbox"
                disabled
                class="checkbox checkbox-xs border-base-content/70 border shadow-[0_0_10px] inset-shadow-[0_0_10px] shadow-base-content/50 inset-shadow-base-content/10 rounded-none"
              />
              <span class="text-lg ml-[6px] mr-8">18 ↑</span>

              <input
                type="checkbox"
                checked
                class="checkbox checkbox-xs border-base-content/70 border shadow-[0_0_10px] inset-shadow-[0_0_10px] shadow-base-content/50 inset-shadow-base-content/10 rounded-none"
              />
              <span class="text-lg ml-[6px] mr-5">18 ↓</span>

              <input
                type="checkbox"
                disabled
                class="checkbox checkbox-xs border-base-content/70 border shadow-[0_0_10px] inset-shadow-[0_0_10px] shadow-base-content/50 inset-shadow-base-content/10 rounded-none"
              />
              <span class="uppercase text-sm ml-[7px]"
                >undiscl<span class="text-md mx-[2px]">■</span>se<span
                  class="text-md ml-[2px]">■</span
                ></span
              >
            </section>

            <section class="ml-3">
              <div class="collapse rounded-none">
                <input type="checkbox" />
                <div class="collapse-title text-md italic">
                  OTHER DETAILS ▶
                </div>
                <div class="collapse-content text-sm">Work In Progress...</div>
              </div>
            </section>

            <hr
              class="mt-7 mb-11 shadow-[0_0_10px] inset-shadow-[0_0_10px] shadow-base-content inset-shadow-base-content w-[28rem] ml-6"
            />

            <!-- -> [[ INCARNATION DETAILS ]]: CONSTELLATION SPONSOR -->
            <section
              class="ml-6 grid grid-rows-[34px_45px_95px_20px_auto] grid-cols-[325px_117px]"
            >
              <div class="col-start-1 row-end-2">
                <h2 class="text-2xl mb-2">CONSTELLATION SPONSOR:</h2>
                <div class="w-[295px] h-[33px] bg-blue-400 rounded-none">
                  <span class="ml-2 block pt-1">The Quiet Hare</span>
                </div>
              </div>

              <!-- -> [[ INCARNATION DETAILS ]]: EXCLUSIVE ATTRIBUTES -->
              <div class="col-start-1 row-start-3">
                <h2 class="text-2xl mb-2">EXCLUSIVE ATTRIBUTES:</h2>
                <div
                  class="relative w-[295px] h-[55px] block bg-blue-400 rounded-none"
                >
                  <div class="top-left-corner size-2"></div>
                  <div class="bottom-right-corner size-2"></div>
                  <span class="ml-2">None.</span>
                </div>
                <span class="block -my-0.5 text-sm cursor-pointer"
                  >[EXPAND LIST]</span
                >
              </div>

              <!-- -> [[ INCARNATION DETAILS ]]: ADDITIONAL NOTES -->
              <span class="text-[12px] ml-0.5 place-content-end"
                >ADDITIONAL NOTES:</span
              >
              <div class="col-start-2 row-start-2 row-end-4">
                <div class="w-full h-full overflow-y-scroll bg-blue-400 p-1">
                  <span class="text-sm">
                    🌟 Is timid, very shy, quiet but sometimes talkative when
                    with friends :> 🔴 Can be really negative about himself, you
                    know cause real-life stuff.
                  </span>
                </div>
                <div class=" text-[12px] mb-5 text-right cursor-pointer">
                  [EXPAND LIST]
                </div>
              </div>

              <!-- -> [[ INCARNATION DETAILS ]]: I have no idea what this is -->
              <div class="row-start-5 row-end-6 col-start-1 col-end-3">
                <div class="flex flex-row gap-7 mt-9 text-2xl">
                  <div>
                    <input
                      type="checkbox"
                      checked
                      class="checkbox checkbox-xs"
                    />
                    <span class="inline-block">RT</span>
                  </div>
                  <div>
                    <input type="checkbox" class="checkbox checkbox-xs" />
                    <span class="inline-block">QRT</span>
                  </div>
                  <div>
                    <input type="checkbox" class="checkbox checkbox-xs" />
                    <span class="inline-block">PQRT</span>
                  </div>

                  <div class="ml-3 text-lg">
                    <span class="mr-3"
                      >FILTER<span class="text-xs">■</span>NG:</span
                    >
                    <span class="cursor-pointer"
                      >ON │ <span class="underline underline-offset-3">OFF</span
                      ></span
                    >
                    <div class="text-[12px] -mt-2">(for no reason)</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- 2nd Page -->
          <div class="w-full">
            <!-- -> [[ INCARNATION DETAILS ]]: AVATAR -->
            <section
              class="max-w-[321px] min-h-[300px] overflow-none bg-blue-400 inset-shadow-[10px_10px_55px_5px_var(--color-cyan-300)]"
            >
              {@render avatar?.()}
              <!-- <div class="flex justify-center items-center h-full"> <span class="text-2xl">[NO IMAGE AVAILABLE]</span> </div> -->
            </section>
            <span class="block cursor-pointer text-md"
              >[EXPAND THUMBNAIL IMAGE]</span
            >
            <hr
              class="mb-7 mt-2.5 shadow-[0_0_10px] inset-shadow-[0_0_10px] shadow-base-content inset-shadow-base-content w-[60px]"
            />

            <!-- -> [[ INCARNATION DETAILS ]]: RADAR CHART STATISTICS -->
            <section class="absolute top-14 right-9">
              <h2 class="text-2xl">STATS:</h2>
              <hr
                class="w-[1.6em] mb-3 shadow-[0_0_10px] inset-shadow-[0_0_10px] shadow-base-content inset-shadow-base-content"
              />
              <div class="relative">
                <div class="top-left-corner size-2"></div>
                <StatsChart />
                <div class="bottom-right-corner size-2"></div>
              </div>
              <h3 class="text-xl text-right cursor-pointer">
                [EXPAND STATISTICS]
              </h3>
            </section>

            <!-- -> [[ INCARNATION DETAILS ]]: COMPREHENSIVE EVALUATION -->
            <section>
              <h3 class="text-2xl">COMPREHENSIVE EVALUATION</h3>
              <hr
                class="mb-5 mt-0.5 shadow-[0_0_10px] inset-shadow-[0_0_10px] shadow-base-content inset-shadow-base-content w-[34px]"
              />

              <div class="text-md flex flex-row items-center mb-4">
                <h4 class="mr-6">ROLE:</h4>
                <input
                  type="checkbox"
                  style="--size: 15px;"
                  class="checkbox"
                  disabled
                />
                <span class="mr-2">DPS(WRITER)</span>

                <input
                  type="checkbox"
                  style="--size: 15px;"
                  class="checkbox"
                  disabled
                />
                <span class="mr-2">TANKER(ARTIST)</span>

                <input
                  type="checkbox"
                  style="--size: 15px;"
                  class="checkbox"
                  disabled
                />
                <span class="mr-2">SUPPORT(PROMOTER??)</span>

                <input
                  type="checkbox"
                  style="--size: 15px;"
                  class="checkbox"
                  checked
                />
                <span class="mr-2">ALL-ROUNDER(MISC)</span>
              </div>

              <div class="text-md flex flex-row items-center mb-2">
                <h4 class="mr-11">STREAM RATING:</h4>
                <input type="checkbox" disabled class="checkbox checkbox-xs" />
                <span class="mr-12 text-lg">NSFW</span>

                <input type="checkbox" checked class="checkbox checkbox-xs" />
                <span class="mr-12 text-lg">SFW</span>

                <input type="checkbox" disabled class="checkbox checkbox-xs" />
                <span class="mr-12 text-lg"
                  >OTHER_________________________________________________________</span
                >
              </div>

              <div class="text-md flex flex-row">
                <h4 class="mr-6">
                  STREAM TAGS:<br />
                  <div class="text-xs -mt-1">(SHIPS, FAV TROPES, MISC)</div>
                </h4>
                <div
                  class="w-full max-w-[360px] h-full max-h-[38px] bg-blue-400 mb-2 rounded-none overflow-auto"
                >
                  <p class="ml-1 whitespace-nowrap">
                    |Cute|, |Wholesome|, |Reader X Author|, |Romance
                    (Obviously)|, |Action|, |Isekai/Regression|, |Yuri/Gl|
                  </p>
                </div>
              </div>
              <div class="text-md flex flex-row">
                <h4 class="mr-5 -mt-2">
                  BANNED KEYWORDS:<br />
                  <div class="text-xs -mt-1">(UNLIKED TAGS)</div>
                </h4>
                <div
                  class="w-full max-w-[361px] h-full max-h-[38px] bg-blue-400 rounded-none overflow-auto"
                >
                  <p class="ml-1 whitespace-nowrap">
                    |Self-hatred|, |Dumass MCs|, |not straightforward|,
                    |Unpassionate|, |Hypocrite|
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
