// import React from 'react'
// import BaseView from '../../../views/baseView'
// import Head from 'next/head'

// const Edit = () => (
// //   <BaseView title="">
// //     @extends('layouts.app')

// // @section('title', 'Edit entry')

// // @section('content')
// //     <form method="POST" action="/entries/{{ $entry->id }}">
// //         @method('PATCH')
// //         @csrf

// //         <div class="mb-4">
// //             <p class="block font-bold mb-2">How are you?</p>

// //             <div class="mb-2">
// //                 <input
// //                     type="radio"
// //                     name="mood"
// //                     id="great"
// //                     value="great"
// //                     @if (old('mood'))
// //                         {{ old('mood') == 'great' ? 'checked' : '' }}
// //                     @else
// //                         {{ $entry->mood == 'great' ? 'checked' : '' }}
// //                     @endif
// //                 >

// //                 <label
// //                     for="great"
// //                     class="{{ $errors->has('mood') ? 'text-red' : '' }}"
// //                 >Great</label>
// //             </div>

// //             <div class="mb-2">
// //                 <input
// //                     type="radio"
// //                     name="mood"
// //                     id="good"
// //                     value="good"
// //                     @if (old('mood'))
// //                         {{ old('mood') == 'good' ? 'checked' : '' }}
// //                     @else
// //                         {{ $entry->mood == 'good' ? 'checked' : '' }}
// //                     @endif
// //                 >

// //                 <label
// //                     for="good"
// //                     class="{{ $errors->has('mood') ? 'text-red' : '' }}"
// //                 >Good</label>
// //             </div>

// //             <div class="mb-2">
// //                 <input
// //                     type="radio"
// //                     name="mood"
// //                     id="fine"
// //                     value="fine"
// //                     @if (old('mood'))
// //                         {{ old('mood') == 'fine' ? 'checked' : '' }}
// //                     @else
// //                         {{ $entry->mood == 'fine' ? 'checked' : '' }}
// //                     @endif
// //                 >

// //                 <label
// //                     for="fine"
// //                     class="{{ $errors->has('mood') ? 'text-red' : '' }}"
// //                 >Fine</label>
// //             </div>

// //             <div class="mb-2">
// //                 <input
// //                     type="radio"
// //                     name="mood"
// //                     id="bad"
// //                     value="bad"
// //                     @if (old('mood'))
// //                         {{ old('mood') == 'bad' ? 'checked' : '' }}
// //                     @else
// //                         {{ $entry->mood == 'bad' ? 'checked' : '' }}
// //                     @endif
// //                 >

// //                 <label
// //                     for="bad"
// //                     class="{{ $errors->has('mood') ? 'text-red' : '' }}"
// //                 >Bad</label>
// //             </div>

// //             <div class="{{ $errors->has('mood') ? 'mb-2' : '' }}">
// //                 <input
// //                     type="radio"
// //                     name="mood"
// //                     id="terrible"
// //                     value="terrible"
// //                     @if (old('mood'))
// //                         {{ old('mood') == 'terrible' ? 'checked' : '' }}
// //                     @else
// //                         {{ $entry->mood == 'terrible' ? 'checked' : '' }}
// //                     @endif
// //                 >

// //                 <label
// //                     for="terrible"
// //                     class="{{ $errors->has('mood') ? 'text-red' : '' }}"
// //                 >Terrible</label>
// //             </div>

// //             @if ($errors->has('mood'))
// //                 <div role="alert" class="text-red text-sm">{{ $errors->first('mood') }}</div>
// //             @endif
// //         </div>

// //         <div class="mb-4">
// //             <label for="notes" class="block font-bold mb-2">What's happening?</label>

// //             <textarea
// //                 name="notes"
// //                 id="notes"
// //                 class="w-full h-32 border shadow rounded appearance-none bg-white px-4 py-2 pr-8 {{ $errors->has('notes') ? 'border-red mb-2' : 'border-grey-light' }}"
// //                 value="{{ old('notes') ?? $entry->notes }}"
// //             ></textarea>

// //             @if ($errors->has('notes'))
// //                 <div role="alert" class="text-red text-sm">{{ $errors->first('notes') }}</div>
// //             @endif
// //         </div>

// //         <div class="mb-4">
// //             <label for="emotions" class="block font-bold mb-2">How do you feel?</label>

// //             <select
// //                 name="emotions"
// //                 id="emotions"
// //                 class="w-full border shadow rounded appearance-none w-full bg-white px-4 py-2 pr-8 h-32 {{ $errors->has('emotions') ? 'border-red mb-2' : 'border-grey-light' }}"
// //                 multiple
// //             >
// //                 <optgroup label="Positive">
// //                     <option value="amazed">Amazed</option>
// //                     <option value="comfortable">Comfortable</option>
// //                     <option value="content">Content</option>
// //                     <option value="determined">Deterimined</option>
// //                     <option value="eager">Eager</option>
// //                     <option value="energetic">Energetic</option>
// //                     <option value="happy">Happy</option>
// //                     <option value="hopeful">Hopeful</option>
// //                     <option value="inspired">Inspired</option>
// //                     <option value="joyful">Joyful</option>
// //                     <option value="loving">Loving</option>
// //                     <option value="motivated">Motivated</option>
// //                     <option value="peaceful">Peaceful</option>
// //                     <option value="proud">Proud</option>
// //                     <option value="relieved">Relieved</option>
// //                     <option value="satisfied">Satisfied</option>
// //                     <option value="silly">Silly</option>
// //                 </optgroup>

// //                 <optgroup label="Negative">
// //                     <option value="angry">Angry</option>
// //                     <option value="annoyed">Annoyed</option>
// //                     <option value="anxious">Anxious</option>
// //                     <option value="ashamed">Ashamed</option>
// //                     <option value="bitter">Bitter</option>
// //                     <option value="bored">Bored</option>
// //                     <option value="confused">Confused</option>
// //                     <option value="depressed">depressed</option>
// //                     <option value="disgusted">Disgusted</option>
// //                     <option value="embarrassed">Embarrassed</option>
// //                     <option value="envious">Envious</option>
// //                     <option value="frustrated">Frustrated</option>
// //                     <option value="furious">Furious</option>
// //                     <option value="hurt">Hurt</option>
// //                     <option value="inadequate">Inadequate</option>
// //                     <option value="insecure">Insecure</option>
// //                     <option value="irritated">Irritated</option>
// //                     <option value="jealous">Jealous</option>
// //                     <option value="lonely">Lonely</option>
// //                     <option value="lost">Lost</option>
// //                     <option value="miserable">Miserable</option>
// //                     <option value="nervous">Nervous</option>
// //                     <option value="overwhelmed">Overwhelmed</option>
// //                     <option value="resentful">Resentful</option>
// //                     <option value="sad">Sad</option>
// //                     <option value="scared">Scared</option>
// //                     <option value="self-conscious">Self-conscious</option>
// //                     <option value="stupid">Stupid</option>
// //                     <option value="tense">Tense</option>
// //                     <option value="terrified">terrified</option>
// //                     <option value="trapped">Trapped</option>
// //                     <option value="uncomfortable">Uncomfortable</option>
// //                     <option value="worried">Worried</option>
// //                     <option value="worthless">Worthless</option>
// //                 </optgroup>
// //             </select>
// //         </div>

// //         <button
// //             type="submit"
// //             class="bg-blue text-white py-2 px-4 mb-2 rounded shadow float-right"
// //         >Update entry</button>
// //     </form>
// // @endsection
// //   </BaseView>
// // )

// // export default Edit
