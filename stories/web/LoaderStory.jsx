import React from 'react';
import DOCCreator, { Description, DocItem, Section, storiesOf } from '../../.storybook/doc-creator';

// Actual component
import Loader from '../../src/molecules/web/Loader'

const LoaderStory = () => (
  <DOCCreator title="ActivityIndicator">
    <Description>Displays a centered activity indicator</Description>
    <Section title="Props">
      <DocItem
        name="animating"
        typeInfo="?boolean = true"
        description="Whether to show the indicator or hide it."
        example={{
          render: () => <Loader />
        }}
      />
    </Section>
  </DOCCreator>
);

storiesOf('Web', module).add('LoaderStory', LoaderStory);